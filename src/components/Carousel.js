import React, { Component } from 'react'
import Body from './Body'
import './styles/Carousel.css'

let baseUrl = 'https://api.themoviedb.org/3/';
let configData = null;
let baseImgUrl = null;
// let tvId = null;
let num = 0
const API_KEY = process.env.REACT_APP_TMDB_KEY

export default class Carousel extends Component {
   constructor(props){
     super(props)
      this.state ={
        movieId: 297802,
        backdrop_path: '',
        poster_path:'',
        poster: '',
        backDrop: '',
        title: '',
        overview: '',

      }

     this.config = this.config.bind(this)
     this.NowPlayingId = this.NowPlayingId.bind(this)
     this.findFilm = this.findFilm.bind(this)
    //  this.init = this.init.bind(this)
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
        let posterUrl = "".concat(baseImgUrl, configData.poster_sizes[3])
        let backDropUrl = "".concat(baseImgUrl, configData.backdrop_sizes[3])
        this.updateImage(posterUrl,backDropUrl ,this.state.poster_path,this.state.backdrop_path)
        console.log('config: ', configData)
    })
   }
   updateImage (posterUrl, backDropUrl,posterPath, backDropPath){
      this.setState({
       backDrop: backDropUrl.concat(backDropPath),
       poster: posterUrl.concat(posterPath)
      })
      console.log(this.state.backDrop)
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
          return temp
      })
          let temp = []
          res.forEach((element) => {
           temp.push(element.id)

          });
          console.log(temp)
          let index = num++
          this.giveId(temp,index)

          // console.log(ids)
       this.findFilm()
          
      
    })
  }

prev = () =>{
  num++
  
}

next = () =>{

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
    this.config()
    
  }

  

  init(){
    window.setInterval(this.findFilm, 1000)
  }
    

  render() {
    const { poster, backDrop, title, overview } = this.state;
    return (
        <React.Fragment>
        {/* <div className="backgroundImg" style={{backgroundColor:'grey', backgroundImage: `url(${this.props.backDrop})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', filter:'blur(8px)'}}></div> */}
        <div className="jumbotron-fluid" style={{ paddingTop:'5%', paddingBottom:'5%',backgroundColor:'grey', backgroundImage: `url(${backDrop})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
          <div className="container">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" >
                  <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4 text-center">
                          <img className="img-fluid" src={poster} alt="poster 1" height="350px" width="250px"/>
                       </div>
                       <div className="col-7 align-middle" style={{color:'white'}}>
                          <h3>{title}</h3>
                          <p >{overview}</p>
                        </div>
                    </div>
                      </div>
                        <a className="carousel-control-prev" onClick={this.prev} role="button" data-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" onClick={this.next} role="button" data-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="sr-only">Next</span>
                        </a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <Body/>
          </React.Fragment>
    )
  }
}
