// ########## Import Dependencies Here ##########
import React from 'react';
import { shape, string } from 'prop-types';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import Gallery from './Gallery';

const SomeNotableScorpios = (props) => {
  const { someNotableScorpios } = props;
  return (
    <section id="some-notable-scorpios">
      <div className="wrapper">
        <h3 className="some-notable-scorpios-heading">{someNotableScorpios.sectionHeading}</h3>
        <h4 className="some-notable-scorpios-subheading">{someNotableScorpios.sectionH3}</h4>
        <div className="some-notable-scorpios-collection-container">
          <Gallery
            sectionTitle={someNotableScorpios.sectionTitle}
            someNotableScorpiosData={someNotableScorpios.someNotableScorpiosData}
          />
          <button className="some-notable-scorpios-button">{someNotableScorpios.sectionButtonText}</button>
          <div className="filler" />
        </div>
      </div>
    </section>
  );
}

SomeNotableScorpios.propTypes = {
  someNotableScorpios: shape({
    sectionHeading: string.isRequired,
    sectionH3: string.isRequired,
    sectionButtonText: string.isRequired,
  }).isRequired,
}

export default SomeNotableScorpios;