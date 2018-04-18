// ########## Import Components Here ##########
import * as types from '../constants';
// import appData from '../components/appData';

const initial = {
  inappData: []
}

export default function (state=[], action) {
  switch (action.type) {
    case types.LOAD_APP_DATA:
    console.log(action.payload)
      return [ ...state, action.payload ];
    default:
      return state;
  }
}