const getNextVideo = (clips, direction, selectedClip) => {
  if (direction === 'FORWARD') {
    if (selectedClip === clips.length - 1) {
      return 1000;
    }
    if (clips.length > 0 && selectedClip < clips.length) {
      return selectedClip + 1;
    }
    if (selectedClip === 1000 && clips.length > 0) {
      return 0;
    }
  }

  if (direction === 'BACKWARD') {
    if (selectedClip === 0) {
      return 1000;
    }
    if (selectedClip === 1000 && clips.length > 0) {
      return clips.length - 1;
    }
    if (clips.length > 0 && selectedClip > 0) {
      return selectedClip - 1;
    }
  }
  return selectedClip;
};

export default getNextVideo;
