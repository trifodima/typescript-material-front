import { all } from 'redux-saga/effects';
import entitySaga from './entitySaga';
import postSaga from './postSaga';

export default function* () {
  yield all([
    entitySaga(),
    postSaga(),
  ]);
}
