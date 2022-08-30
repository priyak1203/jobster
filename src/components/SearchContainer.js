import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/SearchContainer';
import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);

  const handleSearch = (e) => {
    console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          {/* search position */}
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          />

          {/* search by status */}
          <FormRowSelect
            name="searchStatus"
            value={searchStatus}
            list={[searchStatus, ...statusOptions]}
            handleChange={handleSearch}
            labelText="status"
          />

          {/* search by type */}
          <FormRowSelect
            name="searchType"
            value={searchType}
            list={[searchType, ...jobTypeOptions]}
            handleChange={handleSearch}
            labelText="type"
          />

          {/* sort */}
          <FormRowSelect
            name="sort"
            value={sort}
            list={sortOptions}
            handleChange={handleSearch}
          />
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
