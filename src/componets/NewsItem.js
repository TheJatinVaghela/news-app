import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewsItem extends Component {
    
    

     render() {
 
     let {Title,Description,Text,Link,Img,Uniq_Id}=this.props;

      return (
      <>
      <div className="card w-full Font">
            <img src={(!Img)?  "https://cdn.siasat.com/wp-content/uploads/2022/08/Apple-releases-iOS-1421-to-fix-bugs-on-iPhone-12-150x150-1.jpg": Img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title font-bold">{(Title !== null)? Title.slice(0, 40) : Title} <span  className='ml'  onClick={(e)=>{e.target.innerText=Title.slice(40,100)}}>...</span> </h5>
                <p className="card-text">{(Description !== null)? Description.slice(0, 88) : Description} <span  className='ml'  onClick={(e)=>{e.target.innerText=Description.slice(88,200)}}>...</span> </p>
            <a href={Link} target="/" className="btn btn-primary Font mt-4">{Text}</a>
        </div>
    </div>
       
      </>
    )
  }
}
