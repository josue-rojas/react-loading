import React, { Component } from 'react';
import './Styles/HyperTriangle.css';

// inspired by https://codepen.io/foleyatwork/pen/ZJodgr

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

class Triangle extends Component{
  constructor(props){
    super(props);
    const width = this.props.startWidth
    const degree = 60*(Math.PI/180);
    const opacity = 1 - width/this.props.width
    this.state = {
      width: width,
      color: 'rgb(' + getRandomInt(0,256) + ',' + getRandomInt(0,256) + ',' + getRandomInt(0,256) + ')',
      degree: degree,
      bottom: -(Math.sin(degree)*-(width/2)),
      left:  Math.cos(degree)*-(width/2),
      opacity: opacity
    }
    this.changeSize = this.changeSize.bind(this);
  }
  componentDidMount(){
    this.timer = setInterval(this.changeSize, 1);
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  changeSize(){
    const width = (this.state.width+1)%this.props.width;
    const opacity = 1- width/this.props.width

    this.setState({
      color: width === 0 ? 'rgb(' + getRandomInt(0,256) + ',' + getRandomInt(0,256) + ',' + getRandomInt(0,256) + ')' : this.state.color,
      width: width,
      bottom: -(Math.sin(this.state.degree)*-(width/2)),
      left:  Math.cos(this.state.degree)*-(width/2),
      opacity: opacity,
    })
    return 0;
  }
  render(){
    const style = {
      box: {
        position: 'absolute',
        width: this.state.width + 'px',
        height: this.state.width + 'px',
      },
      bottom: {
        width: this.state.width+ 'px',
        height: this.props.borderSize + 'px',
        backgroundColor: this.state.color,
        position: 'absolute',
        bottom: 0,
        opacity: this.state.opacity,
      },
      left: {
        width: this.state.width+ 'px',
        height: this.props.borderSize + 'px',
        backgroundColor: this.state.color,
        position: 'absolute',
        bottom: this.state.bottom+'px',
        transform: 'rotate(60deg)',
        right: this.state.left + 'px',
        opacity: this.state.opacity,
      },
      right: {
        width: this.state.width + 'px',
        height: this.props.borderSize + 'px',
        backgroundColor: this.state.color,
        position: 'absolute',
        bottom:  this.state.bottom+'px',
        transform: 'rotate(-60deg)',
        left: this.state.left+ 'px',
        opacity: this.state.opacity,
      },
    }
    return(
      <div style={style.box}>
        <div style={style.bottom}/>
        <div style={style.left}/>
        <div style={style.right}/>
      </div>
    )
  }
}

export default class HyperTriangle extends Component{
  render(){
    const style = {
      box: {
        position: 'relative',
        width: this.props.maxSize + 'px',
        height: this.props.maxSize + 'px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
    }
    return(
      <div style={style.box}>
        <Triangle
          width={this.props.maxSize}
          startWidth={this.props.maxSize}
          borderSize={this.props.borderSize}/>
        <Triangle
          width={this.props.maxSize}
          startWidth={this.props.maxSize*Math.random()}
          borderSize={this.props.borderSize}/>
        <Triangle
          width={this.props.maxSize}
          startWidth={this.props.maxSize*Math.random()}
          borderSize={this.props.borderSize}/>
        <Triangle
          width={this.props.maxSize}
          startWidth={this.props.maxSize*Math.random()}
          borderSize={this.props.borderSize}/>
        <Triangle
          width={this.props.maxSize}
          startWidth={this.props.maxSize*Math.random()}
          borderSize={this.props.borderSize}/>
      </div>
    )
  }
}
