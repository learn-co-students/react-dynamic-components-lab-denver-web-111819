import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const boxOpacity = this.props.opacity - .1
    return (
  
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
       
        {this.props.opacity <= .2 ? null:  <ColorBox opacity={boxOpacity} /> }
      </div>
    )
  }

}

