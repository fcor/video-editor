import React from 'react';
import PropTypes from 'prop-types';

const durationInSeconds = duration => {
  if (duration < 10) return `0${duration}`;
  return duration;
};

const Info = ({ clipName, duration }) => (
  <div className="video-info-details">
    <div className="clip-details row">
      <h1>{clipName}</h1>
      <p>{`00:${durationInSeconds(duration)}`}</p>
    </div>
    <div className="video-info-hotkeys column">
      <h1>Hoy Keys</h1>
      <div className="hotkeys-details row">
        <p>N = Next video</p>
        <p>B = Previous video</p>
        <p>Space Bar = Play / Pause</p>
      </div>
    </div>
  </div>
);

Info.propTypes = {
  clipName: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default Info;
