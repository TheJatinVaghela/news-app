import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem.js'
export default class News extends Component {
   
    
    
    h1="NEWS Componets";
  
    T_D2={
        Title:"News_Title",
        Description:"Description",
        Info:{
                Text:"Full Info",
                Link:`https://www.spiegel.de/wirtschaft/kryptowaehrung-bitcoin-rauscht-unter-die-20-000-dollar-marke-a-22ae4b3d-9d68-4b95-93c7-a55ed4523abe`,
             },
    }

   
  render() {
   
    return (
      <>
      <h1>{this.h1}</h1>
      <div className='container my-3'>
        <NewsItem Info_OBJ={this.T_D2} />
        <NewsItem Info_OBJ={this.T_D2} />
        <NewsItem Info_OBJ={this.T_D2} />
        <NewsItem Info_OBJ={this.T_D2} />
        <NewsItem Info_OBJ={this.T_D2} />
      </div>
      </>
    )
  }
}
