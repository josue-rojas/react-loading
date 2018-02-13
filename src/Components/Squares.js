import React, { Component } from 'react';
import './Styles/Squares.css';

// inspired by https://codepen.io/leonard/pen/nDuaL
// props
// size: int size of the square (side)
// numSquares: int number of squares to show
// delay: int (ms) delay for animation
// squareDelay: int (ms) delay for each square to start after the other
// color: string of what color squares
// alternate: boolean wether to change direction of every other square

export default class Squares extends Component{
  constructor(props){
    super(props);
    this.getSquareStyle = this.getSquareStyle.bind(this);
  }
  getSquareStyle(animationDelay, alternate){
    return({
      width: '100%',
      height: '100%',
      backgroundColor: this.props.color,
      position: 'absolute',
      opacity: '.3',
      animation: 'square ' + this.props.delay + 'ms linear infinite',
      animationDelay: animationDelay + 'ms',
      animationDirection: alternate ? 'reverse' : 'normal',
    })
  }
  makeSquares(){
    const squares = [];
    let animationDelay = 0;
    let alternate = true;
    for(let i = 0; i < this.props.numSquares; i++){
      squares.push(
        <div style={this.getSquareStyle(animationDelay, alternate)}/>
      )
      if(this.props.alternate) alternate = !alternate;
      animationDelay+=this.props.squareDelay;
    }
    return squares;
  }
  render(){
    const squares = this.makeSquares();
    const style = {
      position: 'relative',
      width: this.props.size + 'px',
      height: this.props.size + 'px',
      // margin is the diagnoal-side of the square? sort of....
      margin: (this.props.size*Math.sqrt(2) - this.props.size) + 'px',
    }
    return(
      <div style={style}>
        {squares}
      </div>
    )
  }
}
