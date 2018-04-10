// ########## Import Dependencies Here ##########
import { combineReducers } from 'redux';

// ########## Import Reducers Here ##########
import initialLoadReducer from './initialLoadReducer';
import toggleModalReducer from './toggleModalReducer';
import signinsignoutReducer from './signinsignoutReducer';

const rootReducers = combineReducers({
  initialLoadReducer,
  toggleModalReducer,
  signinsignoutReducer
});

export default rootReducers;