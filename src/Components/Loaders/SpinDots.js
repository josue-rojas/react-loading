import React, { Component } from 'react';
import './Styles/SpinDots.css';

// this one was a bit harder than the rest but once you know it, it's easy to do....
// props
// size: int (px) size of all div
// circleSize: int (px) size of each circle
// delay: int (ms) delay of animation
// color: string of color of circles
// TODO: clean code (DRY)

export default class SpinDots extends Component{
  constructor(props){
    super(props);
    this.makeCircle = this.makeCircle.bind(this);
  }
  circlePositions = [[0,0,'initial','initial'],[0,'initial',0,'initial'],['initial',0,'initial',0],['initial','initial',0,0]]
  makeCircle(position){
    return({
      borderRadius: '100%',
      backgroundColor: this.props.color,
      width: this.props.circleSize + 'px',
      height: this.props.circleSize + 'px',
      position: 'absolute',
      top: this.circlePositions[position][0],
      left: this.circlePositions[position][1],
      right: this.circlePositions[position][2],
      bottom: this.circlePositions[position][3],
    })
  }
  render(){
    const style = {
      width: this.props.size + 'px',
      height: this.props.size + 'px',
      animation: 'spindots ' + this.props.delay + 'ms linear infinite',
      position: 'absolute',
    }
    const style2 = {
      width: this.props.size + 'px',
      height: this.props.size + 'px',
      animation: 'spindots ' + this.props.delay + 'ms linear infinite',
      animationDelay: this.props.delay/8 + 'ms',
      position: 'absolute',
    }
    const wrapper = {
      position: 'relative',
      width: this.props.size + 'px',
      height: this.props.size + 'px',
      margin: (this.props.size*Math.sqrt(2) - this.props.size) + 'px',
    }
    return(
      <div style={wrapper} className={this.props.className}>
      <div style={style}>
        <div style={this.makeCircle(0)}/>
        <div style={this.makeCircle(1)}/>
        <div style={this.makeCircle(2)}/>
        <div style={this.makeCircle(3)}/>
      </div>
      <div style={style2}>
        <div style={this.makeCircle(0)}/>
        <div style={this.makeCircle(1)}/>
        <div style={this.makeCircle(2)}/>
        <div style={this.makeCircle(3)}/>
      </div>
      </div>
    )
  }
}
