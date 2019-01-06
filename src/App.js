import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import VideoSection from './components/VideoSection';
import Header from './components/Header';
import Playlist from './components/Playlist';
import './app.scss';

const App = ({ mode }) => {
  return (
    <div className="app column">
      <Header />
      <section className="app-content row">
        <VideoSection />
        <Playlist />
      </section>
    </div>
  );
};

App.propTypes = {
  mode: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  const mode = state.mode.mode;
  return {
    mode,
  };
}

export default connect(mapStateToProps)(App);
