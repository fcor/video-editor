import React from 'react';
import { connect } from 'react-redux';
import Edit from './components/Edit';
import Play from './components/Play';

const App = ({ mode }) => {
  let content;
  if (mode === 'EDITING') {
    content = <Edit />;
  } else {
    content = <Play />;
  }
  return <div className="app">{content}</div>;
};

function mapStateToProps(state) {
  const mode = state.mode.mode;
  return {
    mode,
  };
}

export default connect(mapStateToProps)(App);
