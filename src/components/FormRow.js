import React from 'react';

const FormRow = ({ name, type, value, handleChange }) => {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>
        {name}
      </label>
      <input
        className="form-input"
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;
