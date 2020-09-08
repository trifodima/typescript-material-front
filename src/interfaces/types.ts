import { FetchPostsFail, FetchPostsStart, FetchPostsSuccess } from "../store/actions/postActions";

export type PostsActionTypes =
    FetchPostsStart
  | FetchPostsSuccess
  | FetchPostsFail
