import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('http://localhost:3001/dz/connect/oauth/auth.php?app_id=305504&redirect_uri=http://localhost:3001&perms=basic_access,email')
    .then(req => req.text())
    .then(response => console.log(response))
    .catch(err => console.error(err))
    // window.DZ.init({
		// appId  : '305504',
		// channelUrl : 'http://YOUR_DOMAIN/channel.html'
      
    // })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
