import React, { Component } from 'react';
import NewsItem from "./NewsItem";
import './News.css';

export default class News extends Component {

  articles = [ ]

  constructor() {
    super();
    this.state = {
      articles : this.articles
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fd22ac81ff184796a4f7f3843ab5415e";
    let data = await fetch(url);
    let parasedData = await data.json();
    this.setState({articles:parasedData.articles});
  }

  render() {
  function show_description(description) {
    var result = "";
    for(let i=0 ; i<100 ; ++i) {
      if(description.length<=i) {
        result+='.';
      }
      else {
        result+=description[i];
      }
    }
    return result+"..."
  }
  return (
    <>
      <div className='main_body'></div>
        <div className='Row_heading'><h3>Top Tech News</h3></div>
        <div className='sub_div'>
          {this.state.articles.map(elem =>{
          return  <span  key={elem.title}> 
                    <NewsItem title={elem.title?elem.title.slice(0,30)+"...":"No Title Available"} description={show_description(elem.description)} img_url={elem.urlToImage?elem.urlToImage:""}/> 
                  </span>
          })}
        </div>
        
      {/* {this.state.articles.map((elem) =>{console.log(elem.url)})} */}
    </>
    )
  }
}
