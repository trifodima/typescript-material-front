import React, {useEffect, useState, useRef} from 'react';
import classes from './AddPost.module.scss';
import {Button, Container, Grid, TextField, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const dispatch: React.Dispatch<any> = useDispatch();
  const titleRef = useRef<HTMLDivElement | null>(null);
  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log(event)
  };
  useEffect(() => {
    if (titleRef && titleRef.current) {
      titleRef.current.focus();
    }
  },[])
  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };
  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };
  const addHandler = (event: any) => {
    console.log('event = ', event);
    dispatch({ title })
  };
  return (
    <div className={`page-container ${classes.AddPost}`}>
      <Container fixed>
        <Typography
          className={classes.field}
          variant="h3"
          component="div"
          // gutterBottom
        >
          AddPost
        </Typography>
        <Grid container>
          <form onSubmit={onSubmit} className={classes.form}>
            <TextField
              inputRef={titleRef}
              className={classes.field}
              fullWidth
              label="Title"
              name={'title'}
              value={title}
              onChange={onChangeTitle}
              autoComplete={'true'}
            />
            <TextField
              className={classes.field}
              fullWidth
              label="Text"
              name={'text'}
              value={text}
              onChange={onChangeText}
              rows={3}
              rowsMax={6}
              multiline
            />
            <Button
              className={classes.sendButton}
              variant="contained"
              size="large"
              color="primary"
              onClick={addHandler}
              // className={classes.margin}
              type="submit"
            >
              Add
            </Button>
          </form>
        </Grid>
      </Container>
    </div>
  );
};

export default AddPost;
