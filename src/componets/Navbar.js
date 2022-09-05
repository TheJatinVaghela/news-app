
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Outlet, Link } from "react-router-dom";

export default class Navbar extends Component {
    
    A_Bold = "News-APP";
    
  render() {
    return (
      <>
        <nav className="navbar top-0 bg-orange-600 sticky z-10">
           <div className="container-fluid !justify-center bg-transparent">
              <Link className="navbar-brand text-3xl font-bold" to="/">{this.A_Bold}</Link>
              <Link className="navbar-brand text-3xl font-bold" to="/News">News</Link>
           </div>
        </nav>
        <Outlet />
      </>
    )
  }
}
