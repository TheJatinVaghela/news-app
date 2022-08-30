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
        <h1>{this.props.pr.namer} PR-1</h1>
        <h1>{this.props.pr2.namer} PR-2</h1>
        <h1>{this.props.pr3.namer} PR-3</h1>
      </>
    )
  }
}
