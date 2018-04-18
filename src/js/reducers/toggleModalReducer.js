// ########## Import Components Here ##########
import * as types from '../constants';
import appData from '../components/appData';

const initialModalState = {
  modalActive: false
}

export default function (state = initialModalState, action) {
  switch (action.type) {
    case types.OPEN_MODAL:
      return { ...state, modalActive: true };
    case types.CLOSE_MODAL:
      return { ...state, modalActive: false };
    default:
      return state;
  }
}