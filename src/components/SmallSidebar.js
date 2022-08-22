import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/SmallSidebar';
import Logo from './Logo';

const SmallSidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <button
            className="close-btn"
            onClick={() => console.log('close sidebar')}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            <p>link 1</p>
            <p>link 2</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
