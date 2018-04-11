// ########## Import Dependencies Here ##########
import React from 'react';
import { arrayOf, shape, func, bool } from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import Hero from './Hero';
import Promo from './Promo';
import FromOurScropios from './FromOurScropios';
import SomeNotableScorpios from './SomeNotableScorpios';
import BecomeOneOfUs from './BecomeOneOfUs';
import LetsBeInTouch from './LetsBeInTouch';
import Footer from './Footer';
import SignInModal from './SignInModal';
import * as actions from '../actions';

export const App = (props) => {
  const {
    initialLoadData,
    activateModalAction,
    deactivateModalAction,
    toggleModal
  } = props;
  return (
    <div className="app">
      {
        toggleModal.modalActive &&
        <SignInModal
          deactivateModalAction={deactivateModalAction}
        />
      }
      <Hero
        heroData={initialLoadData[0]}
        activateModalAction={activateModalAction}
      />
      <div className="promo-gradient">
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
        <div className="filler" />
      </div>
      <FromOurScropios
        fromOurScorpios={initialLoadData[2]}
        activateModalAction={activateModalAction}
      />
      <SomeNotableScorpios
        someNotableScorpios={initialLoadData[3]}
        activateModalAction={activateModalAction}
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
  activateModalAction: func.isRequired,
  deactivateModalAction: func.isRequired,
  toggleModal: shape({
    modalActive: bool.isRequired
  }).isRequired,
}

App.defaultProp = {
  initialLoadData: null
}

function mapStateToProps({ initialLoadReducer, toggleModalReducer }) {
  return {
    initialLoadData: initialLoadReducer,
    toggleModal: toggleModalReducer
  };
};

export default connect(
  mapStateToProps, {
    activateModalAction: actions.activateModalAction,
    deactivateModalAction: actions.deactivateModalAction,
  })
  (App);