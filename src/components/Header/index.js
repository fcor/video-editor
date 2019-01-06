import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import './styles.scss';

const getCS = (selector, mode) => {
  if (selector === mode) return 'selected';
};

const Header = ({ mode, actions }) => (
  <header>
    <ul className="row">
      <li className={getCS('EDITING', mode)} onClick={actions.letsEdit}>
        Editor
      </li>
      <li className={getCS('PLAYING', mode)} onClick={actions.letsPlay}>
        Video Player
      </li>
    </ul>
  </header>
);

Header.propTypes = {
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
)(Header);
