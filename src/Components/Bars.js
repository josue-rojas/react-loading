import React, { Component } from 'react';
import './Styles/Bars.css';


export default class Bars extends Component{
  constructor(props){
    super(props);
    this.makeBars = this.makeBars.bind(this);
  }
  getBarStyle(delay){
    return({
      minHeight: this.props.minHeight,
      width: '100%',
      backgroundColor: this.props.color,
      animation: 'bars ' + this.props.delay + 'ms linear infinite',
      animationDelay: delay + 'ms',
    })
  }
  makeBars(){
    const barWrapper = {
        width: this.props.width,
        height: this.props.maxHeight,
        display: 'flex',
        alignItems: 'center',
        margin: '1.5px',
      }
    const bars = [];
    let delay = 0;
    for(let i = 0; i < this.props.numBars; i++){
      bars.push(
        <div style={barWrapper}>
          <div style={this.getBarStyle(delay)}/>
        </div>)
      console.log(delay)
      delay+=this.props.barDelay;
    }
    return bars;
  }
  render(){
    const style={
      display: 'flex'
    }
    const bars = this.makeBars();
    return(
      <div style={style}>
        {bars}
      </div>
    )
  }
}
