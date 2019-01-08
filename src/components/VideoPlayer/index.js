import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
      hasVideoEnded: false,
    };
    this.video = React.createRef();
    this.handlePlayback = this.handlePlayback.bind(this);
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  // setState should not be called in componentDidUpdate in favor
  // of getDerivedStateFromProps, but I think here it's reasonable because
  // getDerivedStateFromProps does not provide access to prevProps
  componentDidUpdate(prevProps) {
    const { clip } = this.props;
    if (clip.name !== prevProps.clip.name) {
      this.setState({
        hasVideoEnded: false,
      });
    }
  }

  handlePlayback() {
    const { hasVideoEnded } = this.state;
    const { clip } = this.props;
    if (this.video.current.paused) {
      if (hasVideoEnded) {
        // this.video.current.fastSeek(clip.start);
        this.video.current.load();
        this.video.current.play();
        this.setState({
          hasVideoEnded: false,
        });
      } else {
        this.video.current.play();
      }
    } else this.video.current.pause();
  }

  handleTimeUpdate() {
    const { clip } = this.props;
    const currentTime = this.video.current.currentTime;
    const currentTimeinPC = getTimeinPC(currentTime - clip.start, clip.end - clip.start);

    this.setState({
      currentTimeinPC,
    });
  }

  handlePause() {
    const { currentTimeinPC } = this.state;
    if (currentTimeinPC >= 100) {
      this.setState({
        hasVideoEnded: true,
      });
    }
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
            src={clip.url}
            ref={this.video}
            // src={clip.url}
            type="video/mp4"
            onPause={this.handlePause}
            // onLoadedMetadata={this.handleLoadedMetadata}
            onTimeUpdate={this.handleTimeUpdate}
            // onKeyPress={this.handleKeyPress}
          />
        </figure>
        <VideoControls currentTime={currentTimeinPC} handlePlayback={this.handlePlayback} />
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  clip: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const clips = state.clips.clipList;
  const selectedClip = state.clips.selectedClip;
  let clipToPlay;
  if (selectedClip === 1000) {
    clipToPlay = { ...state.clips.fullVideoDetails, url: state.clips.baseURL };
  } else {
    const url = `${state.clips.baseURL}#t=${clips[selectedClip].start},${clips[selectedClip].end}`;
    clipToPlay = { ...clips[selectedClip], url };
  }
  return {
    clip: clipToPlay,
  };
}

export default connect(mapStateToProps)(VideoPlayer);
