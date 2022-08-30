
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Navbar extends Component {
    
    A_Bold = "News-APP";
    
  render() {
    return (
      <>
        <nav className="navbar top-0 bg-orange-600">
           <div className="container-fluid !justify-center bg-transparent">
              <a className="navbar-brand text-3xl font-bold" href="#/">{this.A_Bold}</a>
          </div>
        </nav>
      </>
    )
  }
}
