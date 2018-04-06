// ########## Import Constants Here ##########
import * as types from '../constants';

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