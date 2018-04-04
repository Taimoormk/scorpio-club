import { OPEN_MODAL, CLOSE_MODAL, GET_APPLICATION_NODE } from '../constants';

export function activateModalAction(value) {
  return {
    type: OPEN_MODAL,
    payload: value
  }
}

export function deactivateModalAction(value) {
  return {
    type: CLOSE_MODAL,
    payload: value
  }
}

export function getApplicationNodeAction() {
  return {
    type: GET_APPLICATION_NODE,
    payload: document.getElementById('app')
  }
}