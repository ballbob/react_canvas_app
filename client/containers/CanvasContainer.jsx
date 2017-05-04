import React from 'react';
import io from 'socket.io-client'

export default class CanvasContainer extends React.Component {

  render(){
    return(
      <div id="canvas-container">
        <canvas id='main-canvas' width='600' height='500'></canvas>
      </div>
    )
  }

}