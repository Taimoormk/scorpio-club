// ########## Import Dependencies Here ##########
import { combineReducers } from 'redux';

// ########## Import Reducers Here ##########
import initialLoadReducer from './initialLoadReducer';
import toggleModalReducer from './toggleModalReducer';

const rootReducers = combineReducers({
  initialLoadReducer,
  toggleModalReducer
});

export default rootReducers;