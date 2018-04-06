// ########## Import Dependencies Here ##########
import { OPEN_MODAL, CLOSE_MODAL } from '../constants';
import appData from '../components/appData';

const initialModalState = {
  modalActive: false
}

export default function (state = { appData, initialModalState }, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, modalActive: true };
    case CLOSE_MODAL:
      return { ...state, modalActive: false };
    default:
      return state;
  }
}