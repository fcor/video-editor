import React from 'react';
import { Line } from 'rc-progress';

const VideoControls = ({ handlePlayback, currentTime }) => (
  <div className="video-controls column">
    <img
      className="video-controls-play"
      src="../dist/images/play.png"
      alt="play"
      onClick={handlePlayback}
    />
    <Line percent={currentTime} strokeWidth="2" trailWidth="2" strokeColor="#A0FB80" />
  </div>
);

export default VideoControls;
