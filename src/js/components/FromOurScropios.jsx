// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import Gallery from './Gallery';
import { appData } from './appData';

class FromOurScorpios extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <section id="from-our-scorpios">
        <div className="wrapper">
          <h3 className="from-our-scorpios-heading">From Our Scorpios</h3>
          <h4 className="from-our-scorpios-subheading">With our drag and drop system you can create pages in minutes!</h4>
          <div className="from-our-scorpios-collection-container">
            <Gallery
              sectionTitle={appData[1].sectionTitle}
              fromOurScorpiosData={appData[1].fromOurScorpiosData}
            />
            <button className="from-our-scorpios-button">See More</button>
          </div>
        </div>
      </section>
    );
  }
}

FromOurScorpios.propTypes = {
}

function mapStateToProps(state) {
  return {
    key: null
  };
};

export default connect(mapStateToProps, {})(FromOurScorpios);