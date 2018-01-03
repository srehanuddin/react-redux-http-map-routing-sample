import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Components/-Header/Header';
import Home from './Components/Home/Home';
import Users from './Components/Users/Users';

//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Route exact path="/" component={Home}/>
        <Route exact path="/Users" component={Users}/>

      </div>
    );
  }
}

export default App;
