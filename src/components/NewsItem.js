import React, { Component } from 'react';
import './NewsItem.css';
import no_img from './no_image.jpeg';

export default class NewsItem extends Component {
  render() {
  let {title,description,img_url,read_more} = this.props;
  return (
      <div className='main'>
        <div className='main_box'>
          {console.log(img_url)}
          <img className='image' src={img_url===""?no_img:img_url} alt='URL_image'></img>
          {/* <img className='image' src={no_img} alt='URL_image'></img> */}
          <div className='title'>{title}</div>
          <div className="content">{description}</div>
          <button className='btn'><a className='read_more' href={read_more}>Read More</a></button>
        </div>
      </div>
    )
  }
}
