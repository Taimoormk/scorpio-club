// ########## Import Dependencies Here ##########
import React from 'react';
import { shape, string } from 'prop-types';
import Typed from 'react-typed';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

const BecomeOneOfUs = (props) => {
  const { becomeOneOfUs } = props;
  return (
    <section id="become-one-of-us">
      <div className="wrapper">
        <h3 className="become-one-of-us-heading">{becomeOneOfUs.sectionHeading}</h3>
        <Typed
          className="become-one-of-us-subheading"
          strings={[becomeOneOfUs.sectionLine1, becomeOneOfUs.sectionLine2]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <button className="become-one-of-us-button">{becomeOneOfUs.sectionButtonText}</button>
        <div className="filler" />
      </div>
    </section>
  );
}

BecomeOneOfUs.propTypes = {
  becomeOneOfUs: shape({
    sectionHeading: string.isRequired,
    sectionLine1: string.isRequired,
    sectionLine2: string.isRequired,
    sectionButtonText: string.isRequired,
  }).isRequired,
}

export default BecomeOneOfUs;