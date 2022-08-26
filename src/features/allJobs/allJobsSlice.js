import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  jobs: [],
};

const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState,
});

export default allJobsSlice.reducer;
