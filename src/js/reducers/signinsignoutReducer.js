// ########## Import Components Here ##########
import * as types from '../constants';

const initialSignInState = {
  isSignedIn: false
}

export default function (state = initialSignInState, action) {
  switch (action.type) {
    case types.SIGN_IN:
      return { ...state, isSignedIn: true };
    case types.SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
}