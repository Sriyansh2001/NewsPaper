import React, { Component } from 'react'
import loading from './spinner.gif';

class Spinner extends Component{
  render() {
    const style = {
      container:{
          alignItems: 'center',
          justifyContent: 'center',
          padding:"100px",
          display:'grid'
        }
    }

    return (
      <div  style={style.container}>
        <img src={loading} alt='loading_spinner'></img> <br></br>
        <h3>Loading</h3>
      </div>
    )
  }
}

export default Spinner;
