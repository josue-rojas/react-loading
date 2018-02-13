import React, { Component } from 'react';
import './Styles/Pulse.css';

// props
// maxSize: string of max size of pulse
// minSize: string of size of inner circle
// borderSize: string of size of outer circle (border)
// color: string of color
// delay: int (ms) of delay for animation

export default class Pulse extends Component{
  render(){
    const style={
      wrapper:{
        width: this.props.maxSize,
        height: this.props.maxSize,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      },
      outer:{
        borderRadius: '100%',
        animation: 'pulse ' + this.props.delay + 'ms linear infinite',
        border: this.props.borderSize +' solid ' + this.props.color,
        position: 'absolute',
      },
      inner:{
        width: this.props.minSize,
        height: this.props.minSize,
        backgroundColor: this.props.color,
        borderRadius: '100%',
      }
    }
    return(
      <div style={style.wrapper}>
        <div style={style.outer}/>
        <div style={style.inner}/>
      </div>
    )
  }
}
