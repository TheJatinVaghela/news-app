import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewsItem extends Component {
    
    
<<<<<<< HEAD

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
=======
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
>>>>>>> 9e196c4417b01f6996021bcbe71c2533b44128df
        </div>
    </div>
       
      </>
    )
  }
}
