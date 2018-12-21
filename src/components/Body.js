import React, { Component } from 'react'
import Nav from './Nav'
import Carousel from './Carousel'
import './styles/Body.css'

let baseUrl = 'https://api.themoviedb.org/3/';
let configData = null;
let baseImgUrl = null;
// let tvId = null;
let num = 0
const API_KEY = process.env.REACT_APP_TMDB_KEY

export default class Body extends Component {
   constructor(props){
     super(props)
      this.state ={
        // movieId: 297802,
        backdrop_path: '',
        poster_path:'',
        poster: '',
        backDrop: '',
        title: '',
        overview: '',
        search:''
      }

      this.search = this.search.bind(this)
      this.film = this.film.bind(this)
      this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount(){
      this.search()
      this.film()
    }
      search(){
        let searchUrl = "".concat(baseUrl, 'search/movie?', 'api_key=', API_KEY, '&language=en-US&query=', this.state.search)
        fetch(searchUrl)
        .then((results) => {
          return results.json()
        })
        .then((json)=>{
          return json.results
        })
        .then((data) =>{
          console.log(data)
          // const res = data.map(movie => {
          // //   let temp = {}
          // //   temp.id = movie.id
          // //     return temp
          // })
          // console.log(res)
        })
      }

    film(){
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
        let posterPath = data.poster_path
        let backDropPath = data.backdrop_path
        console.log(posterPath)
        this.setState({
           backdrop_path: backDropPath,
           poster_path: posterPath,
           title: data.original_title,
           overview: data.overview

          })
    })
    // this.config()
    
   }

    handleChange =(event)=>{
          this.setState({search: event.target.value})
          this.search()
      }
  render() {  
    const {search} = this.state
      // document.addEventListener("DOMContentLoaded", this.init);
      return (
        <React.Fragment>
        <div className="container-fluid" style={{marginTop:'20%',marginBottom:'10%', backgroundImage:"url(assets/darkBackgd.jpg)"}}>
        
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
                    <h3>Search for a Movie</h3>
                    <input type="text" value={search} onChange={this.handleChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
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
      </React.Fragment>
    )
  }
}
