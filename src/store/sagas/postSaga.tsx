import { takeLatest, call, put } from 'redux-saga/effects';
import axios from '../../utils/server';
import {
  fetchPostsSuccess,
  fetchPostsFail,
  FetchPostsStart,
  FetchPostsSuccess,
  FetchRepliesStart,
  fetchRepliesSuccess,
  fetchRepliesFail,
} from '../actions/postActions';
import { FETCH } from '../actions/actionTypes';

// function* fetchPostById({ id }: { id: number }): any {
//   try {
//     // @ts-ignore
//     const response = yield call(axios, {
//       method: 'GET',
//       url: `/posts/${id}`,
//       // headers: {
//       //   'Accept': 'application/json',
//       //   'Content-Type': 'application/json',
//       //   'Authorization': `Token ${token}`,
//       // },
//       // data: formDataObject,
//       // params: {
//       //   page: page
//       // }
//     });
//     const post = response.data;
//     yield put(fetchPostByIdSuccess(post));
//   } catch (error) {
//     yield put(fetchPostByIdFail(error));
//   }
// }
function* fetchPosts({ payload: { page }} : FetchPostsStart) {
  try {
    // @ts-ignore
    const response = yield call(axios, {
      method: 'GET',
      url: `/posts`,
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json',
      //   'Authorization': `Token ${token}`,
      // },
      // data: formDataObject,
      params: {
        page
      }
    });
    const posts: any = response.data.results.data;
    yield put(fetchPostsSuccess(posts));
  } catch (error) {
    yield put(fetchPostsFail(error));
  }
}
function* fetchPostComments({ payload: { id, postId }} : FetchRepliesStart) {
  try {
    // @ts-ignore
    const response = yield call(axios, {
      method: 'GET',
      url: `/post/${postId}/comment/${id}/comments`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    const replies: any = response.data.results;

    yield put(fetchRepliesSuccess({postId, id, replies}));
  } catch (error) {
    yield put(fetchRepliesFail(error));
  }
}
export default function* () {
  //@ts-ignore
  // yield takeLatest(FETCH.POST_BY_ID.START, fetchPostById);
  yield takeLatest(FETCH.POSTS.START, fetchPosts);
  //@ts-ignore
  yield takeLatest(FETCH.REPLIES.START, fetchPostComments);
}
