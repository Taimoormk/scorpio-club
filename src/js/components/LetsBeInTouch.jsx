// ########## Import Dependencies Here ##########
import React from 'react';
import { shape, string } from 'prop-types';
import Typed from 'react-typed';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

const LetsBeInTouch = (props) => {
  const { letsBeInTouch } = props;
  return (
    <section id="lets-be-in-touch">
      <div className="wrapper">
        <h3 className="lets-be-in-touch-heading">{letsBeInTouch.sectionHeading}</h3>
        {/* <h4 className="lets-be-in-touch-subheading">{letsBeInTouch.sectionH3}</h4> */}
        <Typed
          className="lets-be-in-touch-subheading"
          strings={[letsBeInTouch.sectionLine1, letsBeInTouch.sectionLine2]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <form className="lets-be-in-touch-form" action="">
          <input className="lets-be-in-touch-input" type="text" placeholder="Name" name="name" />
          <input className="lets-be-in-touch-input" type="email" placeholder="Email" name="email" />
          <input className="lets-be-in-touch-button" type="submit" value="Submit" />
        </form>
        <div className="filler" />
      </div>
    </section>
  );
}

LetsBeInTouch.propTypes = {
  letsBeInTouch: shape({
    sectionHeading: string.isRequired,
    sectionLine1: string.isRequired,
    sectionLine2: string.isRequired,
  }).isRequired,
}

export default LetsBeInTouch;