import React, {Dispatch, FunctionComponent} from 'react';
import {Comment} from '../../interfaces/postInterface';
import cls from './CommentBar.module.scss';
import CommentItem from '../CommentItem/CommentItem';
import {FetchRepliesStart, fetchRepliesStart} from '../../store/actions/postActions';
import {useDispatch} from 'react-redux';

type Props = {
  comments: Array<Comment>
}
const CommentBar: FunctionComponent<Props> = ({comments}) => {
  const dispatch: Dispatch<FetchRepliesStart> = useDispatch();

  const replyHandler = () => {
    console.log('reply');
  };
  const viewAllAnswers = (id: number | null, postId: number | null) => {
    dispatch(fetchRepliesStart({ id, postId }));
  };
  return (
    <div className={cls.comments}>
      {
        !!comments.length ?
          comments.map(item => {
            return (
              <CommentItem
                key={item.id}
                item={item}
                replyHandler={replyHandler}
                viewAllAnswers={viewAllAnswers}
                // subItem={1}
              />
            )
          }) : (
            <p>Пока нет комментариев</p>
          )
      }
    </div>
  );
};

export default CommentBar;
