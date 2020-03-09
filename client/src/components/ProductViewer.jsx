import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      postingsView: ''
    }
  }

  render(){
    return(
      <div className = 'product-viewer'>
        <img src="http://lorempixel.com/400/400/technics/8"></img>
      </div>
    )
  }
}