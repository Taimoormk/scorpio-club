// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { arrayOf, shape, func, bool } from 'prop-types';
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
import SignInModal from './SignInModal';
import * as actions from '../actions';

export class Home extends Component {

  static propTypes = {
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

  static defaultProp = {
    initialLoadData: null
  }

  render() {
    const {
      initialLoadData,
      activateModalAction,
      deactivateModalAction,
      toggleModal
    } = this.props;
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
}

function mapStateToProps({ initialLoadReducer, toggleModalReducer, isAuthenticatedReducer }) {
  return {
    initialLoadData: initialLoadReducer,
    toggleModal: toggleModalReducer,
    isAuthenticated: isAuthenticatedReducer
  };
};

export default connect(
  mapStateToProps, {
    loadAppAction: actions.loadAppAction,
    activateModalAction: actions.activateModalAction,
    deactivateModalAction: actions.deactivateModalAction,
  })
  (Home);