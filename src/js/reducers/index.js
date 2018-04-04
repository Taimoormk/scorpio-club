import { combineReducers } from 'redux';
import initialLoadReducer from './initialLoadReducer';
import toggleModalReducer from './toggleModalReducer';

const rootReducers = combineReducers({
  initialLoadReducer,
  toggleModalReducer
});

export default rootReducers;