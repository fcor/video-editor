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
    this.handleSelectedClip = this.handleSelectedClip.bind(this);
  }

  handleSelectedClip(index) {
    const { actions } = this.props;
    actions.selectClip(index);
  }

  handleDelete(index) {
    const { actions, clips } = this.props;
    actions.deleteClip(index);
    // if (index === clips.selectedClip) {
    //   actions.selectClip(1000);
    // }
  }

  render() {
    const { mode, clips } = this.props;
    const isSelected = (index, selectedClip) => {
      if (index === selectedClip) return true;
      return false;
    };
    return (
      <div className="playlist">
        <Thumbnail
          cantDelete
          clip={clips.fullVideoDetails}
          mode={mode}
          handleDelete={this.handleDelete}
          handleSelectedClip={this.handleSelectedClip}
          isSelected={isSelected(1000, clips.selectedClip) && clips.clipList.length > 0}
        />
        {clips.clipList.length > 0 && <hr />}
        {clips.clipList.map((item, index) => (
          <Thumbnail
            key={item.name}
            clip={item}
            mode={mode}
            handleDelete={this.handleDelete}
            handleSelectedClip={this.handleSelectedClip}
            index={index}
            isSelected={isSelected(index, clips.selectedClip)}
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
