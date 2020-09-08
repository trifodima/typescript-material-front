import React, {lazy, Suspense} from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store/store';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import withLayout from './utils/hoc';
import './assets/css/main.scss';
// import BaseLayout from './layouts/BaseLayout/BaseLayout';
import MainLayout from './layouts/MainLayout/MainLayout';
import Loader from './components/Loader';
// import Home from './containers/Home/Home';
const AddPost = lazy(() => import('./containers/AddPost/AddPost'));
const Home = lazy(() => import('./containers/Home/Home'));

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Suspense fallback={<Loader/>}>
            <Switch>
              <Route exact path="/" component={withLayout(MainLayout, Home)} />
              <Route exact path="/add" component={withLayout(MainLayout, AddPost)} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
