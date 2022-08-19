import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo } from '../components';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>Login</h3>

        <div className="form-row">
          <label className="form-label" htmlFor="name">
            name
          </label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
