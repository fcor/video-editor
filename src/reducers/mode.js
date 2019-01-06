import * as actionTypes from '../constants/actionTypes';

const initialState = {
  mode: 'EDITING',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LETS_EDIT:
      return {
        mode: 'EDITING',
      };
    case actionTypes.LETS_PLAY:
      return {
        mode: 'PLAYING',
      };
    default:
      return state;
  }
}
