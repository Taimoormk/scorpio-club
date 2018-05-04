// ########## Import Constants Here ##########
import * as types from '../constants';

export function loadAppAction() {
  return {
    type: types.LOAD_APP
  }
}

export function loadAppDataAction(data) {
  return {
    type: types.LOAD_APP_DATA,
    payload: data
  }
}

export function activateModalAction(value) {
  return {
    type: types.OPEN_MODAL,
    payload: value
  }
}

export function deactivateModalAction(value) {
  return {
    type: types.CLOSE_MODAL,
    payload: value
  }
}

export function signInFacebookAction(value) {
  return {
    type: types.SIGN_IN_FACEBOOK,
    payload: value
  }
}

export function signInGoogleAction(value) {
  return {
    type: types.SIGN_IN_GOOGLE,
    payload: value
  }
}

export function signOutAction(value) {
  return {
    type: types.SIGN_OUT,
    payload: value
  }
}

export function activateSideMenuAction() {
  return {
    type: types.OPEN_SIDE_MENU
  }
}

export function deactivateSideMenuAction() {
  return {
    type: types.CLOSE_SIDE_MENU
  }
}