import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import Edit from './Edit';
import Info from './Info';
import './styles.scss';

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
    const { actions } = this.props;

    if (!(start && end && name)) {
      console.log('Cant Save');
    } else {
      // console.log('Clip saved');

      const newClip = {
        name,
        start,
        end,
      };

      actions.saveNewClip(newClip);
      //   this.setState({
      //     clips: [...clips, newClip],
      //     start: '',
      //     end: '',
      //     name: '',
      //   });
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
    const { mode } = this.props;
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
      content = <Info clipName="Blender" duration="0:52" />;
    }
    return <div className="video-info">{content}</div>;
  }
}

VideoInfo.propTypes = {
  mode: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const mode = state.mode.mode;
  return {
    mode,
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
