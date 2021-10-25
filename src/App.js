import React, { Component } from 'react';
// import ZenQuote from './ZenQuote';
import GithubUserInfo from './GithubUserInfo';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <ZenQuote /> */}
        <GithubUserInfo
        username='facebook'
        />
        <GithubUserInfo
        username='colt'
        />
      </div>
    );
  }
}

export default App;
