import React, { Component } from 'react'
import './styles/Footer.css'

export default class Footer extends Component {
  render() {
    return (
        <footer className="page-footer" style={{backgroundColor:"#2d2d2d"}}>
        <div className="footer-copyright text-center" style={{color:"#ffff"}}>© 2018 Copyright:
          <a href="https://www.themoviedb.org/" target="_blank"  rel="noopener noreferrer" > Tmdb.com</a>
        </div>
      
      
      </footer>
      
    )
  }
}
