import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';

const initialState = {
  isLoading: false,
  jobs: [],
};

export const getAllJobs = createAsyncThunk(
  'allJobs/getJobs',
  async (_, thunkAPI) => {
    let url = `/jobs`;
    try {
      const response = await customFetch.get(url, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState,
  extraReducers: {
    [getAllJobs.pending]: (state) => {
      state.isLoading = true;
    },

    [getAllJobs.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.jobs = payload.jobs;
    },

    [getAllJobs.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default allJobsSlice.reducer;
