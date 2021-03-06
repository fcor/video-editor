import * as actionTypes from '../constants/actionTypes';
import getNextVideo from './utils';

const initialState = {
  selectedClip: 1000,
  clipList: [],
  baseURL: '../dist/video/blender.mp4',
  fullVideoDetails: {
    start: 0,
    end: 52,
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
      let selectedClip = state.selectedClip;
      if (action.payload.index === state.selectedClip) {
        selectedClip = 1000;
      } else if (action.payload.index < state.selectedClip) {
        selectedClip--;
      }
      return {
        ...state,
        clipList: clips,
        selectedClip,
      };
    }
    case actionTypes.EDIT_CLIP: {
      const clips = [...state.clipList];
      clips.splice(action.payload.index, 1, action.payload.clip);
      return {
        ...state,
        clipList: clips,
      };
    }
    case actionTypes.SELECT_CLIP: {
      const selectedClip = action.payload.index;
      return {
        ...state,
        selectedClip,
      };
    }
    case actionTypes.NEXT_CLIP: {
      const direction = action.payload.direction;
      const clips = state.clipList;
      const selectedClip = state.selectedClip;
      const newClip = getNextVideo(clips, direction, selectedClip);
      return {
        ...state,
        selectedClip: newClip,
      };
    }
    default:
      return state;
  }
}
