import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import Thumbnail from './Thumbnail';
import './styles.scss';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(index) {
    const { actions } = this.props;
    actions.deleteClip(index);
  }

  render() {
    const { mode, clips } = this.props;
    return (
      <div className="playlist column">
        <Thumbnail
          cantDelete
          clip={clips.fullVideoDetails}
          mode={mode}
          handleDelete={this.handleDelete}
        />
        {clips.clipList.length > 0 && <hr />}
        {clips.clipList.map((item, index) => (
          <Thumbnail
            key={item.name}
            clip={item}
            mode={mode}
            handleDelete={this.handleDelete}
            index={index}
          />
        ))}
      </div>
    );
  }
}

Playlist.propTypes = {
  clips: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  const mode = state.mode.mode;
  const clips = state.clips;
  return {
    mode,
    clips,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
