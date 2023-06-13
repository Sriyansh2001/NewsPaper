import React, { Component } from 'react';
import NewsItem from "./NewsItem";
import './News.css';
import Spinner from './spinner';

export default class News extends Component {



  articles = []
  constructor() {
    super();
    this.state = {
      articles : this.articles,
      loading:true,
      page : 1,
      total:0
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd22ac81ff184796a4f7f3843ab5415e&page=1&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parasedData = await data.json();
    this.setState({articles:parasedData.articles,total:Math.min(7,parasedData.totalResults/this.props.pagesize),loading:false});
  }

  handleNextBtn = async () => {
    let url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd22ac81ff184796a4f7f3843ab5415e&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parasedData = await data.json();
    this.setState({articles:parasedData.articles});
    this.setState({
      articles:parasedData.articles,
      page:this.state.page+1,
      loading:false
    })
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  handlePrevBtn = async () => {
    let url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fd22ac81ff184796a4f7f3843ab5415e&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parasedData = await data.json();
    this.setState({articles:parasedData.articles});
    console.log(parasedData)
    this.setState({
      articles:parasedData.articles,
      page:this.state.page-1,
      loading:false
    })
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
  function show_description(description) {
    var result = "";
    var val="";
    for(let i=0 ; i<100 ; ++i) {
      if(description.length<=i) {
        result+=' ';
      }
      else {
        val+=description[i];
      }
      if(description[i]===' ') {
        result+=val;
        val="";
      }
    }
    return result
  }

  return (
    <>
      <div className='main_body'></div>
        <div className='Row_heading'><h2>Top Tech News</h2></div>
        {this.state.loading && <Spinner/>}
        <div className='sub_div'>
            {this.state.articles.map(elem =>{
            return  <span  key={elem.title}> 
                      <NewsItem title={elem.title?elem.title.slice(0,40)+"...":"No Title Available"} description={elem.description?show_description(elem.description):""} img_url={elem.urlToImage?elem.urlToImage:""} read_more={elem.url}/> 
                    </span>
            })}
        </div>
        <div className='page_change'>
          <button disabled={this.state.page<=1} className='btn' onClick={this.handlePrevBtn}>&larr; &nbsp;  Prev</button>
          <button disabled={this.state.total<=this.state.page} className='btn' onClick={this.handleNextBtn}>Next  &nbsp; &rarr; </button>
        </div>
    </>
    )
  }
}
