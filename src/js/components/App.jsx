// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { arrayOf, shape } from 'prop-types';
import { connect } from 'react-redux';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import Hero from './Hero';
import Promo from './Promo';
import FromOurScropios from './FromOurScropios';
import SomeNotableScorpios from './SomeNotableScorpios';
import BecomeOneOfUs from './BecomeOneOfUs';
import LetsBeInTouch from './LetsBeInTouch';
import Footer from './Footer';

class App extends Component {

  componentDidMount() {
  }

  render() {
    const { initialLoadData } = this.props;
    return (
      <div className="app">
        <Hero
          heroData={initialLoadData[0]}
        />
        <Promo
          promoData={initialLoadData[1].promoPosts[0]}
        />
        <Promo
          promoData={initialLoadData[1].promoPosts[1]}
        />
        <Promo
          promoData={initialLoadData[1].promoPosts[2]}
        />
        <Promo
          promoData={initialLoadData[1].promoPosts[3]}
        />
        <FromOurScropios 
          fromOurScorpios={initialLoadData[2]}
        />
        <SomeNotableScorpios 
          someNotableScorpios={initialLoadData[3]}
        />
        <BecomeOneOfUs 
          becomeOneOfUs={initialLoadData[4]}
        />
        <LetsBeInTouch 
          letsBeInTouch={initialLoadData[5]}
        />
        <Footer 
          footer={initialLoadData[6]}
        />
      </div>
    );
  }
}

App.propTypes = {
  initialLoadData: arrayOf(
    shape({
      promoPosts: arrayOf(
      ).isRequired,
      fromOurScorpios: shape(
      ).isRequired,
      someNotableScorpios: shape(
      ).isRequired,
      becomeOneOfUs: shape(
      ).isRequired,
      letsBeInTouch: shape(
      ).isRequired,
      footer: shape(
      ).isRequired,
    }).isRequired,
  ).isRequired,
}

App.defaultProp = {
  initialLoadData: null
}

function mapStateToProps({initialLoadReducer}) {
  return {
    initialLoadData: initialLoadReducer
  };
};

export default connect(mapStateToProps, {})(App);