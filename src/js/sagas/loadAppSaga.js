// ########## Import Dependencies Here ##########
import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

// ########## Import Components Here ##########
import * as actions from '../actions';
import * as api from '../api';

export default function* loadAppSaga(action) {
  const response = yield call(api.appDataResponse);
  yield put(actions.loadAppDataAction(response));
}