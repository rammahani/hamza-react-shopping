import { createStore, applyMiddleware, compose } from 'redux';
import Reducer from 'redux';
import reduxThunk from 'redux-thunk';

const initState = {};
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initState,
  enhancer(applyMiddleware(reduxThunk))
);
export default store;
