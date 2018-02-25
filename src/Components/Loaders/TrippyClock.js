import React, { Component } from 'react';
import './Styles/TrippyClock.css';


export default class TrippyClock extends Component{
  constructor(props){
    super(props);
    this.makeHands = this.makeHands.bind(this);
    this.getHandStyle = this.getHandStyle.bind(this);
  }
  getHandStyle(delay, opacity){
    return(
      {
        position: 'absolute',
        width: this.props.width + 'px',
        height: this.props.height + 'px',
        borderRadius: '5px',
        backgroundColor: this.props.color,
        transformOrigin: 'bottom',
        animation: 'trippyclock ' + this.props.delay + 'ms ease-in-out infinite',
        animationDelay: delay + 'ms',
        animationDirection: this.props.alternate ? 'alternate' : '',
        opacity: opacity,
      }
    )
  }
  makeHands(){
    const hands = [];
    let delay = 0;
    let opacity = 1;
    for(let i = 0; i < this.props.numHands; i++){
      hands.push(<div key={i+'hand'} style={this.getHandStyle(delay, opacity)}/>)
      delay+=this.props.handDelay;
      opacity-=this.props.opacChange;
    }
    return hands;
  }
  render(){
    const style = {
      position: 'relative',
    }
    const hands = this.makeHands();
    return(
      <div style={style}>
        {hands}
      </div>
    )
  }
}
