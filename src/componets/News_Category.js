import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";

export default class News_Category extends Component {
  constructor(){
    super();
    this.state={

    }
  }

  render() {
    return (
      <>
      

      <nav className='flex overflow-x-auto justify-between flex-row z-40 w-full h-fit bg-red-700 border-2 border-blue-600 Font-H4 font-bold'>
    
          <Link to="/business">business</Link>
          <Link to="/health">health</Link>
          <Link to="/science">science</Link>
          <Link to="/sports">sports</Link>
          <Link to="/technology">technology</Link>
          <Link to="/entertainment">entertainment</Link>

      </nav>
      <Outlet/>
      </>
    )
  }
}
