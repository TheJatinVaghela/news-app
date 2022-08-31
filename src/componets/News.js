import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem.js'
export default class News extends Component {
<<<<<<< HEAD
    TEXT="Full Info";

  
 constructor(){
        super();
  // key in this.state needs to be in lowercase if not Error

          this.state={
            articles : [],
            loeading:false,
          }
    };
=======
   
>>>>>>> 9e196c4417b01f6996021bcbe71c2533b44128df
    
    
    h1="NEWS Componets";
  
    T_D2={
        Title:"News_Title",
        Description:"Description",
        Info:{
                Text:"Full Info",
                Link:`https://www.spiegel.de/wirtschaft/kryptowaehrung-bitcoin-rauscht-unter-die-20-000-dollar-marke-a-22ae4b3d-9d68-4b95-93c7-a55ed4523abe`,
<<<<<<< HEAD
                Img_Link:"https://cdn.prod.www.spiegel.de/images/dc9503f6-cb76-4652-9f18-a474586a73a2_w1280_r1.77_fpx49.99_fpy54.99.jpg",
             },
            }
    
   // runs After evrything undder render() is done 
   async componentDidMount(){
    console.log("DID MOUNT RENDER");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0e517df3867f479dbf0de42790ca2268 `   
        let data =  await fetch(url);
        let parsedData = await data.json()
          console.log(parsedData);
          // changing artical value using this.setState
          this.setState({articles:parsedData.articles})
  }
      
  render() {
    console.log("Rendew ");


    
=======
             },
    }

   
  render() {
   
>>>>>>> 9e196c4417b01f6996021bcbe71c2533b44128df
    return (
      <>
      <h1>{this.h1}</h1>
      <div className='container my-3'>
<<<<<<< HEAD
         <div id='Main' className="grid gap-3">
        
         {this.state.articles.map((OBJ)=> <NewsItem key={OBJ.url} Title={OBJ.title} Description={OBJ.description} Link= {OBJ.url} Text= {this.TEXT} Img={OBJ.urlToImage}/>)}

         {/* <NewsItem Title={OBJ.title} Description={OBJ.description} Link= {OBJ.url} Text= {this.TEXT} Img={OBJ.urlToImage}/>
         <NewsItem Title={OBJ.title} Description={OBJ.description} Link= {OBJ.url} Text= {this.TEXT} Img={OBJ.urlToImage}/>
         <NewsItem Title={OBJ.title} Description={OBJ.description} Link= {OBJ.url} Text= {this.TEXT} Img={OBJ.urlToImage}/>
         <NewsItem Title={OBJ.title} Description={OBJ.description} Link= {OBJ.url} Text= {this.TEXT} Img={OBJ.urlToImage}/>
         <NewsItem Title={OBJ.title} Description={OBJ.description} Link= {OBJ.url} Text= {this.TEXT} Img={OBJ.urlToImage}/>
         <NewsItem Title={OBJ.title} Description={OBJ.description} Link= {OBJ.url} Text= {this.TEXT} Img={OBJ.urlToImage}/>
         <NewsItem Title={OBJ.title} Description={OBJ.description} Link= {OBJ.url} Text= {this.TEXT} Img={OBJ.urlToImage}/>
         <NewsItem Title={OBJ.title} Description={OBJ.description} Link= {OBJ.url} Text= {this.TEXT} Img={OBJ.urlToImage}/>
         <NewsItem Title={OBJ.title} Description={OBJ.description} Link= {OBJ.url} Text= {this.TEXT} Img={OBJ.urlToImage}/>
         <NewsItem Title={OBJ.title} Description={OBJ.description} Link= {OBJ.url} Text= {this.TEXT} Img={OBJ.urlToImage}/> */}

         </div>

      </div>
       </>
=======
        <NewsItem Info_OBJ={this.T_D2} />
        <NewsItem Info_OBJ={this.T_D2} />
        <NewsItem Info_OBJ={this.T_D2} />
        <NewsItem Info_OBJ={this.T_D2} />
        <NewsItem Info_OBJ={this.T_D2} />
      </div>
      </>
>>>>>>> 9e196c4417b01f6996021bcbe71c2533b44128df
    )
  }
}
