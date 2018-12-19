import React, { Component } from 'react'
import {Jumbotron, FormControl,Grid, Row, Col, Image, Button, PageHeader } from 'react-bootstrap'

let baseUrl = 'https://api.themoviedb.org/3/';
let configData = null;
let baseImgUrl = null;
// let tvId = null;
const API_KEY = process.env.REACT_APP_TMDB_KEY
export default class Body extends Component {
    constructor(props){
        super(props)
        this.state= {
            search: ''
        }
      
    }
 
    config = () => {
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

    search = () => {
        let searchUrl = "".concat(baseUrl, 'search/tv?', 'api_key=', API_KEY, '&language=en-US&query=', this.state.search)
        fetch(searchUrl)
        .then((result)=> {
            return result.json()
        })
        .then((data)=> {
              this.tvId = data.results.id
            // console.log(data.results[0])
            
            
        })
    }

    tvFind = () =>{
        let tvUrl = "".concat(baseUrl, `tv/${this.tvId}?`,'api_key=', API_KEY, '&language=en-US&query=') 
        fetch(tvUrl)
        .then((result) => { 
            return result.json()
        })
        .then((data) => {
            console.log(this.tvId)
            console.log(data)
        })
    }

    handleChange =(event)=>{
        this.setState({search: event.target.value})
        this.search()
    }

  render() {
      const {search} = this.state;
    return (
     <Grid>
         <FormControl type="text" value={search} placeholder="search" onChange={this.handleChange}/>
         <Row className="center">
             <h1>Hello World</h1>
         </Row>
         <Button onClick={this.config}>Click</Button>
     </Grid>
    )
  }
}
