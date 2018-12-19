import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import Navbar from './components/NewNavbar'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import './App.css';

class App extends Component {

    

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar/>
            <Switch>
              <Route exact path="/" Component={Body}/>
              <Route path="/Contact" Component={Contact}/>
            </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
