import { FETCH } from './actionTypes';
import {
  IPostResponse
} from '../../interfaces/postInterface';

export type FetchPostsStart = {
  type: typeof FETCH.POSTS.START
  payload: { page: number }
}
export function fetchPostsStart(payload: { page: number }): FetchPostsStart {
  return {
    type: FETCH.POSTS.START,
    payload,
  }
}
export type FetchPostsSuccess = {
  type: typeof FETCH.POSTS.SUCCESS
  payload: any
}
export function fetchPostsSuccess(payload: Array<IPostResponse>): FetchPostsSuccess {
  return {
    type: FETCH.POSTS.SUCCESS,
    payload,
  }
}
export type FetchPostsFail = {
  type: typeof FETCH.POSTS.FAIL
  payload: Error
}
export function fetchPostsFail(payload: Error): FetchPostsFail {
  return {
    type: FETCH.POSTS.FAIL,
    payload,
  }
}

export type FetchRepliesStart = {
  type: typeof FETCH.REPLIES.START
  payload: {
    id: number | null,
    postId: number | null,
  }
}
export function fetchRepliesStart(payload: { id: number | null; postId: number | null }): FetchRepliesStart {
  return {
    type: FETCH.REPLIES.START,
    payload,
  }
}
export type FetchRepliesSuccess = {
  type: typeof FETCH.REPLIES.SUCCESS
  payload: {
    postId: number
    id: number
    posts: any
  }
}
export function fetchRepliesSuccess(payload: any): FetchRepliesSuccess {
  return {
    type: FETCH.REPLIES.SUCCESS,
    payload,
  }
}
export type FetchRepliesFail = {
  type: typeof FETCH.REPLIES.FAIL
  payload: Error
}
export function fetchRepliesFail(payload: Error): FetchRepliesFail {
  return {
    type: FETCH.REPLIES.FAIL,
    payload,
  }
}
export function fetchAddPostStart(payload: { title: string }) {
  return {
    type: FETCH.ADD_POST.START,
    payload,
  }
}
export function fetchAddPostSuccess(post: any) {
  return {
    type: FETCH.ADD_POST.SUCCESS,
    post,
  }
}
export function fetchAddPostFail(error: any) {
  return {
    type: FETCH.ADD_POST.FAIL,
    error,
  }
}
// export function fetchPostByIdStart(id: number) {
//   return {
//     type: FETCH.POST_BY_ID.START,
//     id,
//   }
// }
// export function fetchPostByIdSuccess(post: any) {
//   return {
//     type: FETCH.POST_BY_ID.SUCCESS,
//     post,
//   }
// }
// export function fetchPostByIdFail(error: any) {
//   return {
//     type: FETCH.POST_BY_ID.FAIL,
//     error,
//   }
// }
