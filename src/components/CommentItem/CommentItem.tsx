import React, {FunctionComponent, memo} from 'react';
import {Comment} from '../../interfaces/postInterface';
import cls from './CommentItem.module.scss';
import CommentBar from "../CommentBar/CommentBar";

type Props = {
  item: Comment,
  subItem?: number,
  replyHandler: () => void,
  viewAllAnswers: (id: number | null, postId: number | null) => void
}
const CommentItem: FunctionComponent<Props> = (props) => {
  const { item: { id, user, body, created_at, post_id, is_ref, replies }, subItem, replyHandler, viewAllAnswers } = props;

  const dateFormat = () => {
    const date = new Date(created_at);
    return `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}`;
  };

  return (
    <>
    <div className={cls.item} style={subItem ? {paddingLeft: `${100 * subItem}px`} : {}}>
      <div className={cls.avatar}>
        <img src="https://lorempixel.com/100/100" alt="avatar" />
      </div>
      <div className={cls.body}>
        <div className={cls.bodyUser}>
          <p className={cls.bodyUserText}>{user.name}</p>
          <p className={cls.bodyDate}>{dateFormat()}</p>
        </div>

        <p className={cls.bodyText}>{body}</p>
        <div
          className={cls.replyButton}
          onClick={replyHandler}
        >
          Ответить
        </div>
        {
          is_ref && (
            <div
              className={cls.replyButton}
              onClick={() => viewAllAnswers(id, post_id)}
            >
              Все ответы
            </div>
          )
        }
        {
          (replies && replies.length) && (
            <CommentBar comments={replies} />
          )
        }
      </div>
    </div>
    </>
  );
};

export default CommentItem;
