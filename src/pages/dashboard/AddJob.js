import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { FormRow, FormRowSelect } from '../../components';
import {
  clearValues,
  createJob,
  editJob,
  handleChange,
} from '../../features/job/jobSlice';
import { getUserFromLocalStorage } from '../../utils/localStorage';

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    isEditing,
    status,
    statusOptions,
    editJobId,
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !location) {
      toast.error('please fill out all fields');
      return;
    }

    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        })
      );
      return;
    }
    dispatch(createJob({ position, company, jobLocation, status, jobType }));
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }));
    }
  }, []);

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className="form-center">
          {/* position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* job location */}
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* job status */}
          <FormRowSelect
            name="status"
            value={status}
            list={statusOptions}
            handleChange={handleJobInput}
          />
          {/* job type */}
          <FormRowSelect
            labelText="job type"
            name="jobType"
            value={jobType}
            list={jobTypeOptions}
            handleChange={handleJobInput}
          />

          <div className="btn-container">
            {/* clear button  */}
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            {/* submit button */}
            <button
              type="submit"
              className="btn btn-block"
              disabled={isLoading}
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
