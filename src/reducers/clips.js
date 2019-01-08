import * as actionTypes from '../constants/actionTypes';

const initialState = {
  selectedClip: '',
  clipList: [],
  baseURL: '../dist/videos/blender.mp4',
  fullVideoDetails: {
    start: '0',
    end: '52',
    name: 'Full Video',
    thumbnail: '../dist/images/tn11.png',
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SAVE_NEW_CLIP: {
      const clips = state.clipList;
      const newClip = action.payload.clip;
      return {
        ...state,
        clipList: [...clips, newClip],
      };
    }
    case actionTypes.DELETE_CLIP: {
      const clips = [...state.clipList];
      clips.splice(action.payload.index, 1);
      return {
        ...state,
        clipList: clips,
      };
    }
    case actionTypes.EDIT_CLIP: {
      const clips = state.clipList;
      clips.splice(action.payload.index, 1, action.payload.clip);
      return {
        ...state,
        clipList: clips,
      };
    }
    default:
      return state;
  }
}
