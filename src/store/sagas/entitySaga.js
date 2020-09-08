import { takeLatest, call, put } from 'redux-saga/effects';
import axios from '../../utils/server';
import {
  fetchEntitySuccess, fetchEntityFailure,
} from '../actions/entityActions';
import { FETCH } from '../actions/actionTypes';

function* fetchEntity({ id }) {
  try {
    const response = yield call(axios, {
      method: 'GET',
      url: `/posts/${id}`,
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json',
      //   'Authorization': `Token ${token}`,
      // },
      // data: formDataObject,
    });
    const entity = response.data;
    console.log('entity = ', entity);

    yield put(fetchEntitySuccess(entity));
  } catch (error) {
    yield put(fetchEntityFailure(error));
  }
}

export default function* () {
  yield takeLatest(FETCH.ENTITY.START, fetchEntity);
}
