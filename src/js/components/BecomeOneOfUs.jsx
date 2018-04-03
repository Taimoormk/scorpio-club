// ########## Import Dependencies Here ##########
import React from 'react';
import { shape, string } from 'prop-types';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

const BecomeOneOfUs = (props) => {
  const { becomeOneOfUs } = props;
  return (
    <section id="become-one-of-us">
      <div className="wrapper">
        <h3 className="become-one-of-us-heading">{becomeOneOfUs.sectionHeading}</h3>
        <h4 className="become-one-of-us-subheading">{becomeOneOfUs.sectionH3}</h4>
        <button className="become-one-of-us-button">{becomeOneOfUs.sectionButtonText}</button>
        <div className="filler" />
      </div>
    </section>
  );
}

BecomeOneOfUs.propTypes = {
  becomeOneOfUs: shape({
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

export default BecomeOneOfUs;