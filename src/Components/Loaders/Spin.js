import React, { Component } from 'react';
import './Styles/Spin.css';

// props
// isLoading: boolean to show or hide (removed might let user worry about it)
// size: int size of loading in px (inner circle)
// borderSize: int size of the outer circle
// primaryColor: string of color (rgba, rgb, hex, etc)
// secondaryColor: string of color (rgba, rgb, hex, etc)
// thirdColor: string of color (rgba, rgb, hex, etc)
// fourthColor: string of color (rgba, rgb, hex, etc)
// delay: string of delay of circle spinning (1s, 400ms, etc)
// doubleBorder: boolean to have 2 border or one
// className: same as default

export default class Spin extends Component{
  render(){
    const style={
      width: this.props.size + 'px',
      height: this.props.size + 'px',
      borderTop: this.props.borderSize + 'px solid ' + this.props.primaryColor,
      borderRight: this.props.borderSize + 'px solid ' + this.props.secondaryColor,
      borderBottom: this.props.borderSize + 'px solid ' + this.props.thirdColor,
      borderLeft: this.props.borderSize + 'px solid ' + this.props.fourthColor,
      borderRadius: '100%',
      animation: 'spin ' + this.props.delay + 'ms linear infinite'
    }
    return (
      <div style={style} className={this.props.className}/>
    )
  }
}
