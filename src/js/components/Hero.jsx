// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux'

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

class Hero extends Component {

  componentDidMount() {

  }

  render() {
    const { heroData } = this.props;
    return (
      <section id="hero">
        <div className="wrapper">
          <div className="hero-content-container">
            <img className="hero-logo" src="./images/scorpio-club-white.png" alt="Scorpio Club Logo" />
            <h1 className="hero-heading">{heroData.sectionHeading}</h1>
            <h3 className="hero-subheading">{heroData.sectionH3}</h3>
            <h4 className="hero-text">{heroData.sectionH4}</h4>
            <button className="hero-button">{heroData.sectionButtonText}</button>
          </div>
        </div>
      </section>
    );
  }
}

Hero.propTypes = {
}

// function mapStateToProps(state) {
//   return {
//     key: null
//   };
// };

export default connect(null, {})(Hero);