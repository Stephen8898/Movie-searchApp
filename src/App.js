import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import About from './components/About'
import Body from './components/Body'
import Footer from './components/Footer'
import './App.css';

class App extends Component {

    

  render() {
    return (
      <React.Fragment>
        <div className="background" style={{backgroundImage: `url(assets/darkBackgd.jpg)`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'100%'}}>
        {/* <div class="sidenav">
          <div className="logo">
           <img src="/assets/Tmdb-logo.png"></img>
          </div>
          <a href="#about">About</a>
          </div> */}
          <Body/>
        <Footer/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
