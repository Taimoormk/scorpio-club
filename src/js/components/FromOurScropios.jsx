// ########## Import Dependencies Here ##########
import React from 'react';
import { shape, string, func } from 'prop-types';
import Typed from 'react-typed';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import Gallery from './Gallery';

const FromOurScorpios = (props) => {
  const { fromOurScorpios, activateModalAction } = props;
  return (
    <section id="from-our-scorpios">
      <div className="wrapper">
        <h3 className="from-our-scorpios-heading">{fromOurScorpios.sectionHeading}</h3>
        <Typed
          className="from-our-scorpios-subheading"
          strings={[fromOurScorpios.sectionLine1, fromOurScorpios.sectionLine2]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <div className="from-our-scorpios-collection-container">
          <Gallery
            sectionTitle={fromOurScorpios.sectionTitle}
            fromOurScorpiosData={fromOurScorpios.fromOurScorpiosData}
          />
          <button 
            className="from-our-scorpios-button"
            onClick={() => activateModalAction()}
          >
            {fromOurScorpios.sectionButtonText}
          </button>
          <div className="filler" />
        </div>
      </div>
    </section>
  );
}

FromOurScorpios.propTypes = {
  fromOurScorpios: shape({
    sectionHeading: string.isRequired,
    sectionLine1: string.isRequired,
    sectionLine2: string.isRequired,
    sectionButtonText: string.isRequired,
  }).isRequired,
  activateModalAction: func.isRequired,
}

export default FromOurScorpios;