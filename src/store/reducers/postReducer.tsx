import { FETCH } from '../actions/actionTypes';
import { IPostResponse } from '../../interfaces/postInterface';
import { PostsActionTypes } from '../../interfaces/types';

const initialState = {
  loading: false,
  post: {} as object,
  posts: [] as Array<IPostResponse>,
  error: null as Error | null,
};
type InitialStateType = typeof initialState;

// type Action = any{ type: string, payload: any, error: any }
// type Action =
//   | { type: typeof FETCH.POSTS.START, payload: { page: number }}          // FETCH_POSTS_START
//   | { type: typeof FETCH.POSTS.SUCCESS, payload: Array<IPostResponse> }   // FETCH.POSTS.SUCCESS
//   | { type: typeof FETCH.POSTS.FAIL, error: Error }                       // FETCH.POSTS.FAIL
// type Action =
//   | ActionType<typeof FETCH.POSTS.START, FetchPostsStart>
//   | ActionType<typeof FETCH.POSTS.SUCCESS, FetchPostsSuccess>
//   | ActionType<typeof FETCH.POSTS.FAIL, FetchPostsFail>
// ;
export default function postReducer(state: InitialStateType = initialState, action: any): InitialStateType {
  switch (action.type) {
    // case FETCH.POST_BY_ID.START:
    //   return {
    //     ...state, loading: true
    //   };
    // case FETCH.POST_BY_ID.SUCCESS:
    //   return {
    //     ...state,
    //     post: action.post,
    //     loading: false,
    //   };
    // case FETCH.POST_BY_ID.FAIL:
    //   return {
    //     ...state, loading: false, error: action.error
    //   };

    case FETCH.POSTS.START:
      return {
        ...state, loading: true
      };
    case FETCH.POSTS.SUCCESS:

      return {
        ...state,
        loading: false,
        posts: action.payload
      };
    case FETCH.POSTS.FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case FETCH.REPLIES.START:
      return {
        ...state, loading: true
      };
    case FETCH.REPLIES.SUCCESS:
      const { postId, id, replies } = action.payload;

      const postIndex = state.posts.findIndex((item: any) => item.id === postId);
      const commentIndex = state.posts[postIndex].comments.findIndex((item: any) => item.id === id);
      const newPosts = state.posts;
      newPosts[postIndex].comments[commentIndex].replies = replies;

      return {
        ...state,
        loading: false,
        posts: newPosts,
      };
    case FETCH.REPLIES.FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    // case FETCH.ADD_POST.START:
    //   return {
    //     ...state, loading: true
    //   };
    // case FETCH.ADD_POST.SUCCESS:
    //   return {
    //     ...state,
    //     posts: [...state.posts, action.payload],
    //     loading: false,
    //   };
    // case FETCH.ADD_POST.FAIL:
    //   return {
    //     ...state, loading: false, error: action.error
    //   };
    default:
      return state;
  }
}
