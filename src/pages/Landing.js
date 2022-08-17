import React from 'react';
import logo from '../assets/images/logo.svg';
import heroImage from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobster logo" />
      </nav>
      <div className="container page">
        <div>
          <h1>
            job <span>tracking </span> app
          </h1>
          <p>
            Photo booth gluten-free typewriter squid ascot. Fixie jianbing
            affogato tonx, wayfarers bespoke yuccie photo booth vape tote bag
            messenger bag narwhal. Pickled neutra everyday carry, brunch
            chicharrones food truck.
          </p>
          <button className="btn btn-hero">login/register</button>
        </div>
        <img src={heroImage} alt="job tracking" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
