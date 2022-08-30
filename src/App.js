import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from './componets/Navbar.js'
import News from './componets/News.js'


export class App extends Component {
  // static propTypes = {

  // }
   constructor(){
    super();
    this.H1="Nice TO With H1 MEET CLASS";
 
   };
   H2 = "nice to MEET WITH H2 New Class"
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
