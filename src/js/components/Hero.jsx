// ########## Import Dependencies Here ##########
import React from 'react';
import { shape, string } from 'prop-types';
import Typed from 'react-typed';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

const Hero = (props) => {
  const { heroData } = props;
  return (
    <section id="hero">
      <div className="wrapper">
        <div className="hero-content-container">
          <img className="hero-logo" src="./images/scorpio-club-white.png" alt="Scorpio Club Logo" />
          <h1 className="hero-heading">{heroData.sectionHeading}</h1>
          {/* <h3 className="hero-subheading">{heroData.sectionH3}</h3>
          <h4 className="hero-text">{heroData.sectionH4}</h4> */}
          <Typed
            className="hero-subheading"
            strings={[heroData.sectionLine1, heroData.sectionLine2]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          <button className="hero-button">{heroData.sectionButtonText}</button>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  heroData: shape({
    sectionHeading: string.isRequired,
    sectionLine1: string.isRequired,
    sectionLine2: string.isRequired,
    sectionButtonText: string.isRequired,
  }).isRequired,
}

export default Hero;