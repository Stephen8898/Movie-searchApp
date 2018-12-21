import React, { Component } from 'react'
import './styles/Carousel.css'

export default class Carousel extends Component {
    state = {
        index : 0,
    }
           
    
  next = () => {

    this.update()
  }
  prev = () => {
    
    
    this.update();
  }
  update(){
  let states = this.setState({
   
   })
  
   return states;
   
  }
    

  render() {

    return (
        <React.Fragment>
        {/* <div className="backgroundImg" style={{backgroundColor:'grey', backgroundImage: `url(${this.props.backDrop})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', filter:'blur(8px)'}}></div> */}
        <div className="jumbotron-fluid" style={{ paddingTop:'5%', paddingBottom:'5%',backgroundColor:'grey', backgroundImage: `url(${this.props.backDrop})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
          <div className="container">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" >
                  <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4 text-center">
                          <img className="img-fluid" src={this.props.poster} alt="poster 1" height="350px" width="250px"/>
                       </div>
                       <div className="col-7 align-middle" style={{color:'white'}}>
                          <h3>{this.props.title}</h3>
                          <p >{this.props.overview}</p>
                        </div>
                    </div>
                      </div>
                        {/* <a className="carousel-control-prev" onClick={this.prev} role="button" data-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" onClick={this.next} role="button" data-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="sr-only">Next</span>
                        </a> */}
                    </div>
                  </div>
              </div>
            </div>
          </div>
          </React.Fragment>
    )
  }
}
