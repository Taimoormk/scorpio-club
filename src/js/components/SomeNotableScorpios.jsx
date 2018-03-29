// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import Gallery from './Gallery';
import { appData } from './appData';

class SomeNotableScorpios extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <section id="some-notable-scorpios">
        <div className="wrapper">
          <h3 className="some-notable-scorpios-heading">Some Notable Scorpios</h3>
          <h4 className="some-notable-scorpios-subheading">With our drag and drop system you can create pages in minutes!</h4>
          <div className="some-notable-scorpios-collection-container">
            <Gallery
              sectionTitle={appData[2].sectionTitle}
              someNotableScorpiosData={appData[2].someNotableScorpiosData}
            />
            <button className="some-notable-scorpios-button">See More</button>
            <div className="filler"></div>
          </div>
        </div>
      </section>
    );
  }
}

SomeNotableScorpios.propTypes = {
}

function mapStateToProps(state) {
  return {
    key: null
  };
};

export default connect(mapStateToProps, {})(SomeNotableScorpios);