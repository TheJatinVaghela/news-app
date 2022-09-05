import React, { Component } from 'react'
import PropTypes from 'prop-types'
import News from './componets/News.js'
import Navbar from './componets/Navbar.js'

import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
             <Route path="News" element={<News Key={this.key}/>}>
               
             </Route>
          </Route>
         </Routes>
      </BrowserRouter>
      
       
       
      </>
    )
  }
}

export default App
