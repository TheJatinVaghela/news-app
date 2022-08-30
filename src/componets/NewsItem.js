import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewsItem extends Component {
    
    

     render() {
 
     let {Title,Description,Text,Link,Img,Uniq_Id}=this.props;

      return (
      <>
      <div className="card w-full Font">
            <img src={Img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title font-bold">{Title.slice(0, 40)} <span  onClick={(e)=>{e.target.innerText=Title.slice(40,100)}}>...</span> </h5>
                <p className="card-text">{Description.slice(0, 88)} <span  onClick={(e)=>{e.target.innerText=Description.slice(88,200)}}>...</span> </p>
            <a href={Link} target="/" className="btn btn-primary Font mt-4">{Text}</a>
        </div>
    </div>
       
      </>
    )
  }
}
