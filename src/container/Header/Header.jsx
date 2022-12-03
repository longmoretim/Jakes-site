import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="The Cutting Edge In Lawn Care" />
      <h1 className="app__header-h1">Let Us Create Your Landscape</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>We are a local owned company in Bucks County that takes pride in our work. We offer standard lawn maintenance as well as custom landscaping services. Contact us to set up a free quote.</p>
      <a type="button" className="custom__button" href="#menu">Explore Services</a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
