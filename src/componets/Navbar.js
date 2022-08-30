
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Navbar extends Component {
    constructor(){
        super();
        this.A_Bold = "News-APP";

    }
  static propTypes = {
    prop: PropTypes,
    
  }
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
