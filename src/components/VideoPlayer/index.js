import React from 'react';
import PropTypes from 'prop-types';
import VideoControls from './VideoControls';
import './styles.scss';

const getTimeinPC = (currentTime, maxTime) => {
  return (currentTime * 100) / maxTime;
};

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTimeinPC: 0,
    };
    this.video = React.createRef();
    this.handlePlayback = this.handlePlayback.bind(this);
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
  }

  handlePlayback() {
    if (this.video.current.paused || this.video.current.ended) this.video.current.play();
    else this.video.current.pause();
  }

  handleTimeUpdate() {
    const currentTime = this.video.current.currentTime;
    const currentTimeinPC = getTimeinPC(currentTime, 52);

    this.setState({
      currentTimeinPC,
    });
  }

  render() {
    const { clip } = this.props;
    const { currentTimeinPC } = this.state;
    return (
      <div className="videoplayer">
        <figure className="video-container">
          <video
            // controls
            autoPlay
            muted
            preload="metadata"
            src="../dist/video/blender.mp4"
            ref={this.video}
            // src={clip.url}
            type="video/mp4"
            // onPause={onEnded}
            // onLoadedMetadata={this.handleLoadedMetadata}
            onTimeUpdate={this.handleTimeUpdate}
            // onKeyPress={this.handleKeyPress}
          />
          <VideoControls currentTime={currentTimeinPC} handlePlayback={this.handlePlayback} />
        </figure>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  clip: PropTypes.object.isRequired,
};

export default VideoPlayer;
