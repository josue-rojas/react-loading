import React, { Component } from 'react';
import './Styles/Bars.css';

// props
// width: int of size of width of each bar
// maxHeight: int of size of max height the bar is going to go
// minHeight: int of size of min height the bar should go to
// numBars: int of number of bars to display
// color: string of color the bars should be
// delay: delay for animation
// barDelay: delay for when to start after the previous bar animation started
// className: same as default (only for outer most div)

export default class Bars extends Component{
  constructor(props){
    super(props);
    this.makeBars = this.makeBars.bind(this);
  }
  getBarStyle(delay){
    return({
      minHeight: this.props.minHeight + 'px',
      width: '100%',
      backgroundColor: this.props.color,
      animation: 'bars ' + this.props.delay + 'ms linear infinite',
      animationDelay: delay + 'ms',
    })
  }
  makeBars(){
    const barWrapper = {
        width: this.props.width + 'px',
        height: this.props.maxHeight + 'px',
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
      <div style={style} className={this.props.className}>
        {bars}
      </div>
    )
  }
}
