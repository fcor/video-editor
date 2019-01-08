import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import * as actions from '../../actions';
import Edit from './Edit';
import Info from './Info';
import './styles.scss';
import { canSaveClip, isClipNameUnique, getThumbnail } from './utils';

class VideoInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '',
      end: '',
      name: '',
    };
    this.handleTyping = this.handleTyping.bind(this);
    this.handleDiscard = this.handleDiscard.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleTyping(e, field) {
    this.setState({
      [field]: e.target.value,
    });
  }

  handleSave() {
    const { start, end, name } = this.state;
    const { actions, clips } = this.props;

    if (!(start && end && name)) {
      Swal({
        title: 'Oops!',
        text: 'Enter the data to continue',
        type: 'error',
        confirmButtonText: 'Ok',
      });
    } else {
      const saveClip = canSaveClip(start, end);
      const clipNameUnique = isClipNameUnique(name, clips.clipList);
      if (saveClip && clipNameUnique) {
        const thumbnail = getThumbnail();
        const newClip = {
          name,
          start,
          end,
          thumbnail,
        };
        actions.saveNewClip(newClip);
        Swal({
          position: 'top-end',
          type: 'success',
          title: 'Your clip has been created',
          showConfirmButton: false,
          timer: 1500,
        });
        this.setState({
          start: '',
          end: '',
          name: '',
        });
      } else {
        Swal({
          title: 'Oops!',
          text: `Something is wrong. Check out the data you entered, 
                 remember that clip names must be unique`,
          type: 'error',
          confirmButtonText: 'Ok',
        });
      }
    }
  }

  handleDiscard() {
    this.setState({
      start: '',
      end: '',
      name: '',
    });
  }

  handleDelete() {
    const { actions } = this.props;
    actions.deleteClip(0);
  }

  handleEdit() {
    const { actions } = this.props;
    const { start, end, name } = this.state;
    const newClip = {
      name,
      start,
      end,
    };
    actions.editClip(newClip, 1);
  }

  render() {
    const { mode, clips } = this.props;
    const { start, end, name } = this.state;
    let content;
    if (mode === 'EDITING') {
      content = (
        <Edit
          start={start}
          end={end}
          name={name}
          handleDiscard={this.handleDiscard}
          handleSave={this.handleSave}
          handleTyping={this.handleTyping}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      );
    } else {
      let clipName;
      let duration;
      if (clips.selectedClip === 1000) {
        clipName = clips.fullVideoDetails.name;
        duration = clips.fullVideoDetails.end - clips.fullVideoDetails.start;
      } else {
        const index = clips.selectedClip;
        clipName = clips.clipList[index].name;
        duration = clips.clipList[index].end - clips.clipList[index].start;
      }

      content = <Info clipName={clipName} duration={duration} />;
    }
    return <div className="video-info">{content}</div>;
  }
}

VideoInfo.propTypes = {
  mode: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  clips: PropTypes.object.isRequired,
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
)(VideoInfo);
