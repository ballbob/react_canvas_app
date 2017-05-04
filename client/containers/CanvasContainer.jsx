import React from 'react';
import io from 'socket.io-client'
import CanvasComponent from '../components/CanvasComponent'

export default class CanvasContainer extends React.Component {
  constructor(props){
    super(props)
  }


  // makeRectangle(){
  //   context.fillstyle = 'orchid'
  //   context.fillRect(10,10,50,50)
  // }

  // canvas.onmousemove = function(event){
  //   drawCircle(event.x, event.y)
  // }

  render(){
    return(
      <div id="canvas-container">
        <CanvasComponent/>
      </div>
    )
  }

}