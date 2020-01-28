import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const receivedOpacity = this.props.opacity;

    return (
      <div className="color-box" opacity={receivedOpacity} style={{opacity: this.props.opacity}}>
        {receivedOpacity > 0.2 ? (
          <ColorBox opacity={receivedOpacity - 0.1} />
        ) : (
          null
        )}
      </div>
    )
  }
}


// return (
//   <div className="color-box" style={{opacity: this.props.opacity}}>
//     if (opacity > 0.2) {
//       <ColorBox style={{opacity: this.props.opacity - 0.1}}></ColorBox>
//     } else {
//       null
//     }
//   </div>
// )