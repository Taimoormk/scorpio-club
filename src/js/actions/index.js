import { OPEN_MODAL, CLOSE_MODAL } from '../constants';

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