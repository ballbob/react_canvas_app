import React from 'react';
import io from 'socket.io-client'

export default class CanvasComponent extends React.Component {

  constructor(props){
    super(props)
    this.canvas = null
    this.context = null
    this.handleClick = this.handleClick.bind(this)

    this.socket = io('http://localhost:3000')
    this.socket.on('click',this.handleClick.bind(this))
  }

  componentDidMount(){
    this.canvas = document.querySelector('#main-canvas')
    console.log(this.canvas)
    this.context = this.canvas.getContext('2d')
    console.log("context", this.context)
  }

  handleClick(event){
    // console.log("this", this)
    // console.log(this.context)
    console.log(event)
    console.log(event.clientX)
    this.circle(event)
    this.socket()
  }

  circle(event){
    this.context.beginPath()
    this.context.arc(event.clientX, event.clientY, 30,0,2*Math.PI)
    this.context.stroke()
  }

  submitForm(event){
    event.preventDefault()
    this.socket.emit('click',newDrawing)
  }

  render(){
    return (
      <canvas id='main-canvas' width='600' height='500'onClick={this.handleClick}/>
      )
  }
}