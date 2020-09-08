import React, {FunctionComponent, memo} from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Card} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CommentBar from './CommentBar/CommentBar';
import { IPostResponse } from '../interfaces/postInterface';

// interface IProps {
//   item: {
//     title: string
//     body: string
//   }
// }

const useStyles = makeStyles({
  root: {
    marginTop: 20
  },
  media: {
    height: 140,
  },
});

type Props = {
  item: IPostResponse
}

const CardItem: FunctionComponent<Props> = ({ item }) => {
  const MUIClasses = useStyles();

  return (
    <Card className={MUIClasses.root}>
      <CardActionArea>
        <CardMedia
          className={MUIClasses.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="p">
            Категория: {item.category.title}
          </Typography>

          <Typography
            variant="body2" color="textSecondary"
            component="p"
          >
            {item.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div style={{margin: '15px'}}>
        <CommentBar comments={item.comments} />
      </div>
    </Card>
  );
};

export default CardItem;
