import React from 'react';
import io from 'socket.io-client'

export default class CanvasComponent extends React.Component {
componentDidMount(){
  this.updateCanvas()
}

updateCanvas(){
  const context = 
  context.fillRect(0,0, 100, 100)
}

render(){
  return (
    <canvas id='main-canvas' width='600' height='500'/>
    )
}
}