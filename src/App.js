import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import Navbar from './components/NewNavbar'
import Body from './components/Body'
import './App.css';

class App extends Component {

    

  render() {
    return (
      <React.Fragment>
        <Body/>
        
      </React.Fragment>
    );
  }
}

export default App;
