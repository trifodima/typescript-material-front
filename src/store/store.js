import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';


const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
  // composeEnhancers
);
sagaMiddleware.run(rootSaga);

export default store;
