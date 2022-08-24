import React from 'react';

const FormRowSelect = ({ name, value, handleChange, list, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        className="form-input"
        value={value}
        onChange={handleChange}
      >
        {list.map((itemValue, index) => (
          <option key={index} value={itemValue}>
            {itemValue}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormRowSelect;
