// ########## Import Dependencies Here ##########
import React from 'react';
import { shape, string } from 'prop-types';
import Typed from 'react-typed';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import Gallery from './Gallery';

const SomeNotableScorpios = (props) => {
  const { someNotableScorpios, activateModalAction } = props;
  return (
    <section id="some-notable-scorpios">
      <div className="wrapper">
        <h3 className="some-notable-scorpios-heading">{someNotableScorpios.sectionHeading}</h3>
        {/* <h4 className="some-notable-scorpios-subheading">{someNotableScorpios.sectionH3}</h4> */}
        <Typed
          className="some-notable-scorpios-subheading"
          strings={[someNotableScorpios.sectionLine1, someNotableScorpios.sectionLine2]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <div className="some-notable-scorpios-collection-container">
          <Gallery
            sectionTitle={someNotableScorpios.sectionTitle}
            someNotableScorpiosData={someNotableScorpios.someNotableScorpiosData}
          />
          <button
            className="some-notable-scorpios-button"
            onClick={() => activateModalAction()}
          >
            {someNotableScorpios.sectionButtonText}
          </button>
          <div className="filler" />
        </div>
      </div>
    </section>
  );
}

SomeNotableScorpios.propTypes = {
  someNotableScorpios: shape({
    sectionHeading: string.isRequired,
    sectionLine1: string.isRequired,
    sectionLine2: string.isRequired,
    sectionButtonText: string.isRequired,
  }).isRequired,
}

export default SomeNotableScorpios;