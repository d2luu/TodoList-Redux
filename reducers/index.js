import {combineReducers} from 'redux';
import taskReducers from './taskReducers';

const allReducers = combineReducers({
  taskReducers,
  // can have more reducers here
});

export default allReducers;