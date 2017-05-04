import React from 'react';
import io from 'socket.io-client'

export default class CanvasComponent extends React.Component {

  constructor(props){
    super(props)
    this.canvas = null
    this.context = null
    this.updateCanvas = this.updateCanvas.bind(this)
  }

  componentDidMount(){
    this.canvas = document.querySelector('#main-canvas')
    console.log(this.canvas)
    this.context = this.canvas.getContext('2d')
    console.log("context", this.context)
    // this.onMouseMove()
  }

  updateCanvas(event){
    // console.log("this", this)
    // console.log(this.context)
    console.log(event)
    console.log(event.clientX)
    this.drawLine(event)
  }

  drawLine(event){
    this.context.beginPath()
    this.context.moveTo(event.clientX,event.clientY)
    this.context.lineTo(event.clientX+20,event.clientY+20)
    this.context.stroke()
  }

  // onMouseMove(){
  //   this.canvas.onclick = this.updateCanvas(event)
  // }

  render(){
    return (
      <canvas id='main-canvas' width='600' height='500'onClick={this.updateCanvas}/>
      )
  }
}