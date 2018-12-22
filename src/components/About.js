import React, { Component } from 'react'
import Nav from './Nav'
import {Link} from 'react-router-dom'

export default class About extends Component {
  render() {
    return (
      <div className="container">
        
      <div className="row justify-content-center" style={{color:'#fff'}}>
      <h1>Lehman Web Development Class</h1>
        <img src="assets/leh-logo.png" alt="lehman logo" style={{marginTop:'5rem', marginBottom:'5rem'}}/>
      <div className="row" style={{color:'#fff', marginTop:'5rem'}}>
      <h3>Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, 
        and maybe he fell into the river and drowned. Only think about one thing at a time. Don't get greedy. 
        The only thing worse than yellow snow is green snow. It's important to me that you're happy. 
        We artists are a different breed of people. We're a happy bunch.</h3>
      </div>
    </div>
  </div>
    )
  }
}
