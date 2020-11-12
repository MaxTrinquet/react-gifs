import React, { Component } from 'react';


class Gif extends Component {
  render(){
    const src = "//media3.giphy.com/media/r2jnl5GABxAvOY270o/giphy.gif";
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
