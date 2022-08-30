import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewsItem extends Component {
    
    
    h1="News-Item-Conmponets";

    
  
  render() {
 
     let {Info_OBJ}=this.props;

      return (
      <>
      <div className="card w-72">
            <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{Info_OBJ.Title}</h5>
                <p className="card-text">{Info_OBJ.Description}</p>
            <a href={Info_OBJ.Info.Link} target="/" className="btn btn-primary">{Info_OBJ.Info.Text}</a>
        </div>
    </div>
       
      </>
    )
  }
}
