import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { FormRow } from '../../components';

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    isEditing,
    status,
    statusOptions,
  } = useSelector((store) => store.job);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !location) {
      toast.error('please fill out all fields');
      return;
    }
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}: ${value}`);
  };

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
          <div className="form-row">
            <label htmlFor="status" className="form-label">
              status
            </label>
            <select
              name="status"
              id="status"
              className="form-input"
              value={status}
              onChange={handleJobInput}
            >
              {statusOptions.map((itemValue, index) => (
                <option key={index} value={itemValue}>
                  {itemValue}
                </option>
              ))}
            </select>
          </div>

          {/* job type */}

          <div className="btn-container">
            {/* clear button  */}
            <button type="button" className="btn btn-block clear-btn">
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
