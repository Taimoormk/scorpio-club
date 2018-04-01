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
    return (
      <section id="hero">
        <div className="wrapper">
          <div className="hero-content-container">
            <img className="hero-logo" src="./images/scorpio-club-white.png" alt="Scorpio Club Logo" />
            <h1 className="hero-heading">Scorpio Club</h1>
            <h3 className="hero-subheading">Scorpio is the best sign ever!</h3>
            <h4 className="hero-text">Join us to know all the reasons WHY!</h4>
            <button className="hero-button">Let Me In</button>
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