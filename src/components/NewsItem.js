import React, { Component } from 'react';
import './NewsItem.css';

export default class NewsItem extends Component {
  render() {
  let {title,description,img_url} = this.props;
  return (
      <>
        <div className='main_box'>
          <img className='image' src={img_url==null?null:img_url}></img>
          <div className='title'>{title}</div>
          <div className="content">{description}</div>
          <button>Read More</button>
        </div>
      </>
    )
  }
}
