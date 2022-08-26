import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/JobsContainer';
import Job from './Job';
import Loading from './Loading';

const JobsContainer = () => {
  const { isLoading, jobs } = useSelector((store) => store.allJobs);

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>jobs info</h5>
      <div>
        {jobs.map((job) => {
          console.log(job);
          return <Job />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
