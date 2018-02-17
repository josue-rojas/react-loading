import React, { Component } from 'react';
import './Styles/Cylon.css';

// props
// maxWidth: int (px) size of the whole div
// minWidth: int (px) size of the rectangles
// height: int (px) size of height of the whole div
// numRect: int number of rectangles
// color: string color of the rectangles
// opacityChange: float of how much to lower the opacity after each rect
// delay: int delay of the animation
// rectDelay: int delay of start after each rect

export default class Cylon extends Component{
  constructor(props){
    super(props);
    this.getRectStyle = this.getRectStyle.bind(this);
    this.makeRects = this.makeRects.bind(this);
  }
  getRectStyle(delay, opacity){
    return({
      width: this.props.minWidth + 'px',
      height: '100%',
      backgroundColor: this.props.color,
      opacity: opacity,
      position: 'absolute',
      animation: 'cylon ' + this.props.delay + 'ms linear infinite',
      animationDelay: delay + 'ms',
      animationDirection: 'alternate',
    })
  }
  makeRects(){
    const rects = [];
    let delay = 0;
    let opacity = 1;
    for(let i = 0; i < this.props.numRect; i++){
      rects.push(
        <div style={this.getRectStyle(delay, opacity)}/>
      )
      opacity-=this.props.opacityChange;
      delay+=this.props.rectDelay;
    }
    return rects
  }
  render(){
    const rects = this.makeRects();
    const style = {
      outer: {
        width: this.props.maxWidth + 'px',
        height: this.props.height + 'px',
      },
      //inner is to keep it from going out off the box
      inner: {
        width: this.props.maxWidth - this.props.minWidth + 'px',
        height: '100%',
        position: 'relative',
      }
    }
    return(
      <div style={style.outer}>
        <div style={style.inner}>
          {rects}
        </div>
      </div>
    )
  }
}
