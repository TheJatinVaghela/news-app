import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem.js'
export default class News extends Component {
    constructor(){
        super();
        this.h1="NEWS Componets";
    }
  static propTypes = {
    prop: PropTypes
  }
  PPR={
    namer:"LolJar ",
  }
  pr={ ...this.PPR}=this.PPR;
  pr2={...this.PPR};
  render() {
    return (
      <>
     
        <h1>{this.h1}</h1>
        <div className='border-8 border-orange-800'>
            <NewsItem pr={this.pr} pr2={this.pr2} pr3={this.PPR}/>
        </div>
        
      </>
    )
  }
}
