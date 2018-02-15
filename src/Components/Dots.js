import React, { Component } from 'react';
import './Styles/Dots.css';

// props
// size: int size of the each dot in px
// numDots: int number of dots to show
// color: string color of dots
// delay: int delay for dots grow and shrink, in ms
// dotDelay: int delay from dot to dot transition, in ms
// className: same as default (note: only the class name for outer most div)
// tip, a smooth effect is delay=dotDelay/10

export default class Dots extends Component{
  constructor(props){
    super(props);
    this.makeDots = this.makeDots.bind(this);
    this.getDotStyle = this.getDotStyle.bind(this);
  }
  getDotStyle(delay){
    return({
      borderRadius: '100%',
      backgroundColor: this.props.color,
      animation: 'dots ' + this.props.delay + 'ms linear infinite',
      margin: 'auto',
      animationDelay: delay + 'ms',
    })
  }
  makeDots(){
    const dotWrapper = {
        width: this.props.size + 'px',
        height: this.props.size + 'px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1.5px',
      }

    const dots = [];
    let delay = 0;
    for(let i = 0; i < this.props.numDots; i++){
      dots.push(
        <div style={dotWrapper}>
          <div style={this.getDotStyle(delay)}/>
        </div>);
      delay+=this.props.dotDelay;
    }
    return dots;
  }
  render(){
    const dots = this.makeDots()
    const dotBarStyle={
      display: 'flex',
    }
    return(
      <div style={dotBarStyle} className={this.props.className}>
        {dots}
      </div>
    )
  }
}
