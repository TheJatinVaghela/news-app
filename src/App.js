import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from './componets/Navbar.js'
import News from './componets/News.js'


export class App extends Component {
  // static propTypes = {

  // }
   
  
  render() {
    return (
      <>
      <Navbar/>
       <News/>
       
      </>
    )
  }
}

export default App
