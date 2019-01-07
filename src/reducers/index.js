import { combineReducers } from 'redux';
import mode from './mode';
import clips from './clips';

export default combineReducers({
  mode,
  clips,
});
