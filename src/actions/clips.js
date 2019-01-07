import * as actionTypes from '../constants/actionTypes';

export const saveNewClip = clip => ({
  type: actionTypes.SAVE_NEW_CLIP,
  payload: {
    clip,
  },
});

export const editClip = (clip, index) => ({
  type: actionTypes.EDIT_CLIP,
  payload: {
    clip,
    index,
  },
});

export const deleteClip = (clip, index) => ({
  type: actionTypes.DELETE_CLIP,
  payload: {
    index,
  },
});
