/* eslint-disable */
import { all, fork } from 'redux-saga/effects';
import * as authSaga from '$pages/login/saga';

export default function* root() {
  yield all([
    fork(authSaga.watchLogin),
    fork(authSaga.watchLogout),
  ]);
}

