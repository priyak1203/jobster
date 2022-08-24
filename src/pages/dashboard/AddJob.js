import React from 'react';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { FormRow } from '../../components';

const AddJob = () => {
  return (
    <Wrapper>
      <form className="form">
        <h3>add job</h3>
        <div className="form-center">
          {/* position */}
          <FormRow type="text" name="position" />
          {/* company */}
          <FormRow type="text" name="company" />
          {/* job location */}
          <FormRow type="text" name="jobLocation" labelText="job location" />
          <div className="btn-container">
            {/* clear button  */}
            <button type="button" className="btn btn-block clear-btn">
              clear
            </button>
            {/* submit button */}
            <button type="submit" className="btn btn-block">
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
