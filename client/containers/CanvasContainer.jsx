import React from 'react';
import io from 'socket.io-client'

export default class CanvasContainer extends React.Component {

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
  // constructor(props){
  //   super(props)



  // }


  // makeRectangle(){
  //   context.fillstyle = 'orchid'
  //   context.fillRect(10,10,50,50)
  // }

  // // canvas.onmousemove = function(event){
  // //   drawCircle(event.x, event.y)
  // // }

  // render(){
  //   return(
  //     <div id="canvas-container">
  //       <canvas id='main-canvas' width='600' height='500'></canvas>
  //     </div>
  //   )
  // }

}