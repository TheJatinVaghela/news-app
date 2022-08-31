import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewsItem extends Component {
  constructor(){
    super();
    this.state={
      
    }
  }
  

  render(){
    let {Title,Description,Text,Link,Img,Uniq_Id}=this.props;
    
    return(
      <>
     <div className="card w-full Font border-2 border-orange-500">
              <img src={(!Img)?  "https://media.wired.com/photos/62e95bada1dc74857a858363/191:100/w_1280,c_limit/Bitcoin-Fog-Security-GettyImages-1241143235.jpg": Img} className="card-img-top" alt="..." />
          <div className="card-body bg-orange-300">
            <h5 className="card-title font-bold">{(Title !== null)? Title.slice(0, 30) : Title} <span  className='ml'  onClick={(e)=>{e.target.innerText=Title.slice(30,100)}}>...</span> </h5>
              <p className="card-text">{(Description !== null)? Description.slice(0, 30) : Description} <span  className='ml'  onClick={(e)=>{e.target.innerText=Description.slice(30,200)}}>...</span> </p>
                  <a href={Link} target="/" className="btn bg-orange-500 Font mt-4">{Text}</a>
          </div>
      </div>
      </>
    )
  }
}
    

