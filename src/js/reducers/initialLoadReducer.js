import  { FILL_ME } from '../constants';
import appData from '../components/appData';

export default function(state=appData, action) {
  switch(action.type) {
    case FILL_ME:
      return {...state};
    default:
    return state;
  }
}