import React, { Component } from 'react'
import PropTypes from 'prop-types'
import News from './componets/News.js'
import Navbar from './componets/Navbar.js'

import { BrowserRouter, Routes, Route } from "react-router-dom";

export class App extends Component {
  
   constructor(){
    super();
    this.key=process.env.REACT_APP_NEWS_API;
   }
 
   
  
  render() {
    return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
             <Route path="/News" element={<News Key={this.key} category="general"/>}/>
             <Route path="/business" element={<News Key={this.key} category="business"/>}/>
             <Route path="/health" element={<News Key={this.key} category="health"/>}/>
             <Route path="/science" element={<News Key={this.key} category="science"/>}/>
             <Route path="/sports" element={<News Key={this.key} category="sports"/>}/>
             <Route path="/technology" element={<News Key={this.key} category="technology"/>}/>
             <Route path="/entertainment" element={<News Key={this.key} category="entertainment"/>}/>
             
          </Route>
         </Routes>
      </BrowserRouter>
      
       
       
      </>
    )
  }
}

export default App
