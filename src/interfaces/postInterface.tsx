export interface IPostByIdParams {
  id: number
  page: number
}
export type Comment = {
  id: number
  post_id: number
  user_id: number
  parent_id: number | null
  body: string
  created_at: Date
  updated_at: Date
  is_ref: boolean
  replies?: Array<Comment>
  user: {
    id: number
    name: string
    email: string
    email_verified_at: any
    created_at: Date
    updated_at: Date
  }
}
export interface ITodoResponse {
  userId: number
  id: number
  title: boolean
  body: string
}
export type IPost = {
  id: number,
  title: string
  body: string
  category_id: number
  user_id: number
  created_at: Date
  updated_at: Date
  category: {
    id: number
    title: string
  }

}
export type IPostResponse = any

export interface IRootReducer {
  postReducer: {
    post: any;
    posts: IPostResponse[];
    loader: boolean;
  },
  entityReducer: {
    entity: any;
    loader: boolean;
  }
}

