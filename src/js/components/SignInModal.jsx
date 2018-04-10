// ########## Import Dependencies Here ##########
import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import AriaModal from 'react-aria-modal';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########
import * as actions from '../actions';

const SignInModal = (props) => {
  const { deactivateModalAction, signInAction, signOutAction } = props;
  return (
    <div id="signin-modal">
      <AriaModal
        titleText="Signin Modal"
        onExit={() => deactivateModalAction()}
        initialFocus=".signin-modal-body"
        underlayStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'coloumn' }}
      >
        <div className="signin-modal">
          <div className="signin-modal-body">
            <img className="signin-modal-left-background" src="./images/signin-modal-left-background.png" alt="Signin Modal left background" />
            <img className="signin-modal-left-character" src="./images/signin-modal-left-character.png" alt="Signin Modal left character" />
            <div className="signin-modal-right-heading">Login with Facebook or Google</div>
            <div className="signin-modal-right-login">
              <img
                className="facebook-login-button"
                src="./images/facebook-login-button.png"
                alt="Facebook login button"
                onClick={() => signInAction()}
              />
              <img
                className="google-login-button"
                src="./images/google-login-button.png"
                alt="Google login button"
                onClick={() => signInAction()}
              />
            </div>
          </div>
          {/* <footer className="modal-footer"> */}
          {/* <button id="demo-one-deactivate" onClick={() => deactivateModalAction()}>
                deactivate modal
              </button> */}
          {/* </footer> */}
        </div>
      </AriaModal>
    </div>
  );
}

SignInModal.propTypes = {
  deactivateModalAction: func.isRequired,
}

function mapStateToProps({ signinsignoutReducer }) {
  return {
    isSignedIn: signinsignoutReducer
  };
};

export default connect(mapStateToProps, {
  signInAction: actions.signInAction,
  signOutAction: actions.signOutAction,
})(SignInModal);