import React from 'react';
import io from 'socket.io-client'
import CanvasComponent from '../components/CanvasComponent'

export default class CanvasContainer extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div id="canvas-container">
        <CanvasComponent/>
      </div>
    )
  }

}