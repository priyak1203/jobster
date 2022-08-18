import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
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
          <Link to="/register" className="btn btn-hero">
            login/register
          </Link>
        </div>
        <img src={heroImage} alt="job tracking" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
