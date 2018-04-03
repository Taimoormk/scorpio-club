// ########## Import Dependencies Here ##########
import React from 'react';
import { shape, string } from 'prop-types';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import Gallery from './Gallery';

const FromOurScorpios = (props) => {
  const { fromOurScorpios } = props;
  return (
    <section id="from-our-scorpios">
      <div className="wrapper">
        <h3 className="from-our-scorpios-heading">{fromOurScorpios.sectionHeading}</h3>
        <h4 className="from-our-scorpios-subheading">{fromOurScorpios.sectionH3}</h4>
        <div className="from-our-scorpios-collection-container">
          <Gallery
            sectionTitle={fromOurScorpios.sectionTitle}
            fromOurScorpiosData={fromOurScorpios.fromOurScorpiosData}
          />
          <button className="from-our-scorpios-button">{fromOurScorpios.sectionButtonText}</button>
          <div className="filler" />
        </div>
      </div>
    </section>
  );
}

FromOurScorpios.propTypes = {
  fromOurScorpios: shape({
    sectionHeading: string.isRequired,
    sectionH3: string.isRequired,
    sectionButtonText: string.isRequired,
  }).isRequired,
}

// function mapStateToProps(state) {
//   return {
//     key: null
//   };
// };

export default FromOurScorpios;