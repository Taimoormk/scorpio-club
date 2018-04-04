// ########## Import Dependencies Here ##########
import React from 'react';
import { shape, string, func } from 'prop-types';
import Typed from 'react-typed';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

const Hero = (props) => {
  const { heroData, activateModalAction } = props;
  return (
    <section id="hero">
      <div className="wrapper">
        <div className="hero-content-container">
          <img className="hero-logo" src="./images/scorpio-club-white.png" alt="Scorpio Club Logo" />
          <h1 className="hero-heading">{heroData.sectionHeading}</h1>
          <Typed
            className="hero-subheading"
            strings={[heroData.sectionLine1, heroData.sectionLine2]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          <button
            className="hero-button"
            onClick={() => activateModalAction()}
          >
            {heroData.sectionButtonText}
          </button>
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
  activateModalAction: func.isRequired,
}

export default Hero;