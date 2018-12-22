import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import About from './components/About'
import Nav from './components/Nav'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import './App.css';

class App extends Component {

    

  render() {
    return (
      <Router>
     <div className="background" style={{backgroundImage: `url(assets/background-flash.gif)`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundAttachment:'fixed',height:'100%'}}>
      <Nav/>
      <Switch>
        {/* <div className="background" style={{backgroundImage: `url(assets/background-flash.gif)`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundAttachment:'fixed',height:'100%'}}></div> */}
        <Route exact path="/" component={Carousel}/>
        <Route path="/about" component={About}/>
        </Switch>
        <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
