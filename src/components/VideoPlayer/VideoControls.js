import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'rc-progress';

const VideoControls = ({ handlePlayback, currentTime }) => {
  let percent;
  if (currentTime < 0) {
    percent = 0;
  } else {
    percent = currentTime;
  }
  return (
    <div className="video-controls column">
      <img
        className="video-controls-play"
        src="../dist/images/play.png"
        alt="play"
        onClick={handlePlayback}
      />
      <Line percent={percent} strokeWidth="2" trailWidth="2" strokeColor="#A0FB80" />
    </div>
  );
};

VideoControls.propTypes = {
  handlePlayback: PropTypes.func.isRequired,
  currentTime: PropTypes.number.isRequired,
};

export default VideoControls;
