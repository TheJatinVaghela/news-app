import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class LI_comp extends Component {
  
 
  render() {
    let {Number, OnCkick}=this.props
    return (
      <>
      {/*onClick={this.Page2}*/}
      <li className="page-item" onClick={OnCkick}> <a className="page-link Font" href="#">{Number}</a> </li>
      </>
    )
  }
}
