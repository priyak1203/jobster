import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  jobs: [],
};

const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState,
});

export default allJobsSlice.reducer;
