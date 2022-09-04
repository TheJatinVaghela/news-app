import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from './componets/Navbar.js'
import News from './componets/News.js'


export class App extends Component {
  // static propTypes = {
   constructor(){
    super();
    this.key=process.env.REACT_APP_NEWS_API;
   }
  // }
   
  
  render() {
    return (
      <>
      <Navbar />
       <News Key={this.key}/>
       
      </>
    )
  }
}

export default App
