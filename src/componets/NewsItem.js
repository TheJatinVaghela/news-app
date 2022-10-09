import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewsItem extends Component {
  constructor(){
    super();
    this.state={
      
    }
    
  }
  

  render(){
    let {Title,Description,Text,Link,Img,Date,Author}=this.props;
    
    return(
      <>
     <div className="card w-full Font border-2 border-orange-500" >
        <img src={(!Img)? "https://i.insider.com/62e42a454b455800188b68ff?width=1200&format=jpeg": Img} className="card-img-top" alt="No IMG"/>
          <div className="card-body bg-orange-300">
            <h5 className="card-title font-bold">{(Title !== null)? Title.slice(0, 30) : Title}<span  className=''  onClick={(e)=>{e.target.innerText=Title.slice(30,100)}}>...</span></h5>
              <p className="card-text">{(Description !== null)? Description.slice(0, 30) : Description}<span  className=''  onClick={(e)=>{e.target.innerText=Description.slice(30,200)}}>...</span></p>
                <p className="card-text"><small className="text-muted">Author:"{Author}" Last updated {Date}</small></p>
                  <a href={Link} target="/" className="btn bg-orange-500 Font mt-4">{Text}</a>
          </div>
      </div>
      </>
    )
  }
}
    

