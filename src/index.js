import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src="../dist/images/logo.svg" className="App-logo" alt="logo" />
      <p>
        Welcome to this React boilerplate. <br /> Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        React Docs
      </a>
    </header>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
