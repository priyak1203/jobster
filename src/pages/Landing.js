import React from 'react';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobster logo" />
      </nav>
      <div className="container">
        <div>
          <h1>
            job <span>tracking </span> app
          </h1>
          <p>
            Photo booth gluten-free typewriter squid ascot. Fixie jianbing
            affogato tonx, wayfarers bespoke yuccie photo booth vape tote bag
            messenger bag narwhal. Pickled neutra everyday carry, brunch
            chicharrones food truck shaman humblebrag copper mug echo park
            pop-up intelligentsia vape.
          </p>
          <button className="btn btn-hero">login/register</button>
        </div>
        <img src={main} alt="job tracking" className="img" />
      </div>
    </main>
  );
};

export default Landing;
