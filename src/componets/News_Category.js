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
      <nav className='flex flex-col z-40 w-fit h-fit bg-red-700 border-2 border-blue-600 sticky top-0'>
    
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
