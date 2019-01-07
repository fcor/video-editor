import React from 'react';
import VideoPlayer from '../VideoPlayer';
import VideoInfo from '../VideoInfo';
import './styles.scss';

const VideoSection = () => (
  <div className="video-section column">
    <VideoPlayer />
    <VideoInfo />
  </div>
);

export default VideoSection;
