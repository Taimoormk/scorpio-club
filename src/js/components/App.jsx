// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux'

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import Hero from './Hero';
import Promo from './Promo';
import FromOurScropios from './FromOurScropios';
import SomeNotableScorpios from './SomeNotableScorpios';
import BecomeOneOfUs from './BecomeOneOfUs';
import LetsBeInTouch from './LetsBeInTouch';
import Footer from './Footer';
import appData from './appData';

class App extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="app">
        <Hero />
        <Promo 
          promoData={appData[1].promoPosts[0]}
        />
        <Promo 
          promoData={appData[1].promoPosts[1]}
        />
        <Promo 
          promoData={appData[1].promoPosts[2]}
        />
        <Promo 
          promoData={appData[1].promoPosts[3]}
        />
        <FromOurScropios />
        <SomeNotableScorpios />
        <BecomeOneOfUs />
        <LetsBeInTouch />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
}

function mapStateToProps(state) {
  return {
    testReducer: state.testReducer
  };
};

export default connect(mapStateToProps, {})(App);