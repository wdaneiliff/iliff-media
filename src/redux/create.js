import mainReducer from './reducers';
import {createStore} from 'redux';

export default (initialState) => {
  return createStore(mainReducer, initialState);
};
