
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Outlet, Link } from "react-router-dom";

export default class Navbar extends Component {
    
    A_Bold = "News-APP";
    render() {
    let {CAT}=this.props
    return (
      <>
        <nav className="navbar top-0 bg-orange-600 sticky z-10">
           <div className="container-fluid !justify-center bg-transparent">
              <Link className="navbar-brand Font-H1 font-bold" to="/">{this.A_Bold}{CAT}</Link>
              {/* <Link className="navbar-brand text-3xl font-bold" to="/general-News">general-News</Link> */}
           </div>
        </nav>
        <Outlet />
      </>
    )
  }
}
