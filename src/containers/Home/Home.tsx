import React, {memo, useEffect} from 'react';
import cls from './Home.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import CardItem from '../../components/CardItem';
import { IRootReducer } from '../../interfaces/postInterface';
import { FetchPostsStart, fetchPostsStart } from '../../store/actions/postActions';
import { Pagination } from '@material-ui/lab';

const defaultProps = {
  children: null
};

type Props = {
  children: React.ReactNode;
} & typeof defaultProps;

type Handler = (value: string, func: (str: string) => void) => void
const Home: React.FunctionComponent<Props> = (props) => {
  const dispatch: React.Dispatch<FetchPostsStart> = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsStart({ page: 1 }));
  },  [dispatch]);
  // const post: any = useSelector<IRootReducer>((state) => state.postReducer.post);
  // const posts: Array<IPostResponse> | Array<never> = useSelector<IRootReducer>((state) => state.postReducer.posts);
  const { posts, error }: any = useSelector<IRootReducer>((state) => state.postReducer);

  const handler: Handler = (value, func) => {
    func(value);
  };
  // handler(String(5), console.log);
  const changePage = (event: any, page: number) => {
    dispatch(fetchPostsStart({ page }));
  };

  return (
    <div className={`page-container`}>
      {
        error && (
          <p className="error">{error.message}</p>
        )
      }
      {
        !!posts.length &&
        posts.map((item: any) => (
          <CardItem
            key={item.id}
            item={item}
          />
        ))
      }
      <Pagination
        className={cls.pagination}
        onChange={changePage}
        count={Math.ceil(posts.length / 5) }
        showFirstButton
        showLastButton
      />
    </div>
  );
};
Home.defaultProps = defaultProps;
export default Home;
