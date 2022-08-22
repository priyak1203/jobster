import React from 'react';
import { useSelector } from 'react-redux';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/Navbar';

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn">
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button type="button" className="btn">
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className="dropdown show-dropdown">
            <button type="button" className="dropdown-btn">
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
