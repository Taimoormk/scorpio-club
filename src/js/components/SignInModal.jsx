// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { arrayOf, shape } from 'prop-types';
import AriaModal from 'react-aria-modal';

// ########## Import Containers Here ##########

// ########## Import Components Here ##########

class SignInModal extends Component {
  render() {
    const { deactivateModalAction, getApplicationNodeAction } = this.props;
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
              <img className="signin-modal-left-background" src="./images/signin-modal-left-background.png" alt="Signin Modal left background"></img>
              <img className="signin-modal-left-character" src="./images/signin-modal-left-character.png" alt="Signin Modal left character" />
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
}

export default SignInModal;