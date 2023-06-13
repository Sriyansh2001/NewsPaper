import React, { Component } from 'react';
import './NewsItem.css';
import no_img from './no_image.jpeg';

export default class NewsItem extends Component {
  render() {
  let {title,description,img_url,read_more} = this.props;
  return (
      <div className='main'>
        <div className='main_box'>
          <img className='image' href={read_more} src={img_url===""?no_img:img_url} alt='URL_image'></img>
          <div className='inner_part'>
            <div className='title' href={read_more}><b>{title}</b></div>
            <div className="content">{description}</div> <br></br>
            <div className='line'></div>
            <div className='read_btn'><a className='read_more' href={read_more}>Read Article <div className="arrow"></div></a></div>
          </div>
        </div>
      </div>
    )
  }
}
