import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Theme, withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import classes from './MainLayout.module.scss';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Container,
  Drawer, List, ListItem, ListItemIcon, ListItemText, Divider,
  Toolbar, IconButton, Typography
} from '@material-ui/core';
import AppBar from "@material-ui/core/AppBar/AppBar";
import PostAddIcon from '@material-ui/icons/PostAdd';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ListAltIcon from '@material-ui/icons/ListAlt';

const drawerWidth = 240;

const useStyles = (theme: Theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

interface IMainLayoutProps {
  classes?: any,
}
interface IMainLayoutState {
  isDrawerOpen: boolean
}
class MainLayout extends Component<IMainLayoutProps, IMainLayoutState> {
  /**
   * @param {any} [props] - Props parameters.
   */
  constructor(props: any) {
    super(props);
    this.state = {
      isDrawerOpen: false,
    }
  }
  setDrawerOpen = (status: boolean) => {
    this.setState({
      isDrawerOpen: status
    });
  }
  render() {
    const { isDrawerOpen } = this.state;
    const MUIClasses = this.props.classes;

    return (
      <div className={`page-container ${classes.pageWrapper}`}>
        <AppBar
          className={`mui-header ${MUIClasses.appBar} ${isDrawerOpen && MUIClasses.appBarShift}`}
          position="static"
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.headerMenuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => this.setDrawerOpen(!isDrawerOpen)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.headerTitle}>
              Posts
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={MUIClasses.drawer}
          variant="persistent"
          anchor="left"
          open={isDrawerOpen}
          classes={{
            paper: MUIClasses.drawerPaper,
          }}
        >
          <div className={MUIClasses.drawerHeader}>
            <IconButton onClick={() => this.setDrawerOpen(!isDrawerOpen)}>
              {<ChevronLeftIcon />}
            </IconButton>
          </div>
          <div className={MUIClasses.drawerContainer}>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText>
                  <Link className={classes.drawerLink} to={'/'}>Все посты</Link>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <PostAddIcon />
                </ListItemIcon>
                <ListItemText>
                  <Link className={classes.drawerLink} to={'/add'}>Добавить пост</Link>
                </ListItemText>
              </ListItem>
            </List>
            <Divider />
          </div>
        </Drawer>
        <Container>
          <main>{this.props.children}</main>
        </Container>
      </div>
    );
  }
}
export default withStyles(useStyles)(connect()(MainLayout));
