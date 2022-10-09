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
   AT="-general"
   
  
  render() {
    return (
      <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navbar CAT={this.AT}/>}>
              <Route exact path="/" element={<News key="-general" Key={this.key} category="general"/>}/>
        </Route>
        <Route path="/" element={<Navbar CAT={this.AT="-business"}/>}>
              <Route exact path="/business" element={<News key="business" Key={this.key} category="business"/>}/>
        </Route>
        <Route path="/" element={<Navbar CAT={this.AT="-health"}/>}>
                <Route exact path="/health" element={<News key="health" Key={this.key} category="health"/>}/>
        </Route> 
        <Route path="/" element={<Navbar CAT={this.AT="-science"}/>}>
              <Route exact path="/science" element={<News key="science" Key={this.key} category="science"/>}/>
        </Route> 
        <Route path="/" element={<Navbar CAT={this.AT="-sports"}/>}> 
              <Route exact path="/sports" element={<News key="sports" Key={this.key} category="sports"/>}/>
        </Route>  
        <Route path="/" element={<Navbar CAT={this.AT="-technology"}/>}> 
              <Route exact path="/technology" element={<News key="technology" Key={this.key} category="technology"/>}/>
        </Route>
        <Route path="/" element={<Navbar CAT={this.AT="-entertainment"}/>}> 
              <Route exact path="/entertainment" element={<News key="entertainment" Key={this.key} category="entertainment"/>}/>
        </Route>
             
          
         </Routes>
      </BrowserRouter>
      
       
       
      </>
    )
  }
}

export default App
