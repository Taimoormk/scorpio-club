// ########## Import Dependencies Here ##########
import { takeEvery, all } from 'redux-saga/effects';

// ########## Import Components Here ##########
import * as types from '../constants';

// ########## Import Sagas Here ##########
import demoSaga from './demoSaga';

function* watchActivateModalAction() {
  yield takeEvery(types.OPEN_MODAL, demoSaga);
}

export default function* rootSaga() {
  yield all ([watchActivateModalAction()]);
}