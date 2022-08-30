import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewsItem extends Component {
    constructor(){
        super();
        this.h1="News-Item-Conmponets";
    }
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <>
        <h1>{this.h1}</h1>
       
      </>
    )
  }
}
