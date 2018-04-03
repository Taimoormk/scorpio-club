// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import { connect } from 'react-redux'

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import Gallery from './Gallery';
import appData from './appData';

class SomeNotableScorpios extends Component {

  componentDidMount() {
  }

  render() {
    const { someNotableScorpios } = this.props;
    return (
      <section id="some-notable-scorpios">
        <div className="wrapper">
          <h3 className="some-notable-scorpios-heading">{someNotableScorpios.sectionHeading}</h3>
          <h4 className="some-notable-scorpios-subheading">{someNotableScorpios.sectionH3}</h4>
          <div className="some-notable-scorpios-collection-container">
            <Gallery
              sectionTitle={appData[3].sectionTitle}
              someNotableScorpiosData={appData[3].someNotableScorpiosData}
            />
            <button className="some-notable-scorpios-button">See More</button>
            <div className="filler" />
          </div>
        </div>
      </section>
    );
  }
}

SomeNotableScorpios.propTypes = {
  someNotableScorpios: shape({
    sectionHeading: string.isRequired,
    sectionH3: string.isRequired,
  }).isRequired,
}

// function mapStateToProps(state) {
//   return {
//   };
// };

export default connect(null, {})(SomeNotableScorpios);