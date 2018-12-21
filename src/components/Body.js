import React, { Component } from 'react'
import Nav from './Nav'
import Carousel from './Carousel'
import './styles/Body.css'


export default class Body extends Component {


  render() {  

      // document.addEventListener("DOMContentLoaded", this.init);
      return (
        <React.Fragment>
        <Nav/>
        <Carousel/>
        <div className="container-fluid" style={{marginTop:'20%', backgroundImage:"url(assets/darkBackgd.jpg)"}}>
        
        {/* <div class="input-group input-group-sm mb-3">
          {/* <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default"></span>
          </div> */}
          {/* <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        <pre></pre>
        </div> */} 
  
          <div className="container">
            <div className="row">
              {/* <div className="col" style={{border:"2px solid  black"}}> */}
                <div className="row justify-content-center">
                  {/* <div className="col-lg">
                    <input type="text"/>
                  </div> */}
                </div>
                  <div className="row" style={{color:'#ffff'}}>
                    <h3></h3>
                    <p>We artists are a different breed of people. We're a happy bunch. 
                      If you hypnotize it, it will go away. Get away from those little Christmas tree
                      things we used to make in school. The only prerequisite is that it makes you happy. 
                      If it makes you happy then it's good. This is gonna be a happy little seascape.
                      Let's put some happy trees and bushes back in here.</p>
                  </div>
              </div>
            </div>
          </div>
        {/* </div> */}
        <div className="row">           
                     {/* <input type="text" value={""} placeholder="search" onChange={this.handleChange}/> */}
                  </div>  
                      <h1>Hello World</h1>
                  <button onClick={this.NowPlayingId}>Click</button>
      </React.Fragment>
    )
  }
}
