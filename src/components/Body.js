import React, { Component } from 'react'
import Nav from './Nav'
import Carousel from './Carousel'
import './styles/Body.css'

let baseUrl = 'https://api.themoviedb.org/3/';
let configData = null;
let baseImgUrl = null;
// let tvId = null;
const API_KEY = process.env.REACT_APP_TMDB_KEY

export default class Body extends Component {
   constructor(props){
     super(props)
      this.state ={
        movieId: 297802,
        poster: '',
        backDrop: '',
        title: '',
        overview: ''

      }

     this.config = this.config.bind(this)
     this.NowPlayingId = this.NowPlayingId.bind(this)
     this.findFilm = this.findFilm.bind(this)
     this.componentDidMount = this.componentDidMount.bind(this)
   }

   componentDidMount(){
      this.config()
      this.NowPlayingId()
      this.findFilm()
   }
   config(){
    let url = "".concat(baseUrl, 'configuration?', 'api_key=', API_KEY)
    fetch(url)
    .then((result) =>{
       return result.json()
    })
    .then((data)=>{
        baseImgUrl = data.images.secure_base_url;
        configData = data.images;
        console.log('config: ', configData)
    })
   }
   NowPlayingId(){
    let playingUrl = "".concat(baseUrl, 'movie/now_playing?', 'api_key=', 'fe14b848bd02d9c1c51451133c5153c2', '&language=en-US&page=1')
    fetch(playingUrl)
    .then((results) => {
      
      return results.json();
    })
    .then((json) =>{
      return json.results;
    })
      .then((data)=>{
      
      const res = data.map(movie => {
        let temp = {}
        temp.id = movie.id
        // temp.title = movie.original_title
        // temp.overview = movie.overview
        // temp.poster = movie.poster_path
        // temp.backDrop = movie.backdrop_path
          return temp
      })
          let temp = []
          res.forEach((element, index) => {
           temp.push(element.id)

          
         
          });
          console.log(temp)
          let num = 0
          let index = num++
          this.giveId(temp,index)

          // console.log(ids)
       this.findFilm()
          
      
    })
  }

  giveId(arr, index){{
    console.log(arr[index])
    this.setState({
      movieId: arr[index]
    })
      return arr[index]
    }
  }

  findFilm(){
    let movieUrl = "".concat(baseUrl, `movie/${this.state.movieId}?`,'api_key=', API_KEY, '&language=en-US&query=') 
    fetch(movieUrl)
    .then((result) => { 
        return result.json()
    })
    .then((data) => {
      console.log(data)
        //  Object.keys(id).forEach(element => {
        //   console.log(element)
        // })
      //   let posterPath = data.poster_path
      //   // console.log(posterPath)
      //  this.path(posterPath )
      //   console.log(data)
    })
  }


  render() {  
      const { poster, backDrop, title, overview } = this.state;
    return (
        <React.Fragment>
        <Nav/>
        <Carousel poster={poster} title={title} backDrop={backDrop} overview={overview} />
        <div className="container-fluid" style={{marginTop:''}}>
        
        {/* <div class="input-group input-group-sm mb-3">
          {/* <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default"></span>
          </div> */}
          {/* <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        <pre></pre>
        </div> */} 
  
          <div className="container">
            <div className="row">
              <div className="col" style={{border:"2px solid  black"}}>
                <div className="row justify-content-center">
                  {/* <div className="col-lg">
                    <input type="text"/>
                  </div> */}
                </div>
                <div className="row ">
                <div></div>
                  <img width="342px" src="/assets/PicNum1.jpg" alt="Test Pic"/>
              
                {/* <hr style={{margin:"0px"}}/> */}
                {/* <div className="row"> */}
                  <div className="col-5">
                    <h3>Star wars</h3>
                    <p>We artists are a different breed of people. We're a happy bunch. 
                      If you hypnotize it, it will go away. Get away from those little Christmas tree
                      things we used to make in school. The only prerequisite is that it makes you happy. 
                      If it makes you happy then it's good. This is gonna be a happy little seascape.
                      Let's put some happy trees and bushes back in here.</p>
                  </div>
                  {/* <div className="col-4"> */}
                    <h4>Release Date: 06/07/08</h4>
                  
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">           
                     {/* <input type="text" value={""} placeholder="search" onChange={this.handleChange}/> */}
                  </div>  
                      <h1>Hello World</h1>
                  <button onClick={this.NowPlayingId}>Click</button>
      </React.Fragment>
    )
  }
}
