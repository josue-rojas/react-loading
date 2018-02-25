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
    const degree = this.props.degree;
    const opacity = 1 - width/this.props.width
    this.state = {
      width: width,
      color: 'rgb(' + getRandomInt(0,256) + ',' + getRandomInt(0,256) + ',' + getRandomInt(0,256) + ')',
      degree: degree,
      bottom: this.props.bottoms[width],
      left:  this.props.lefts[width],
      opacity: opacity
    }
    this.changeSize = this.changeSize.bind(this);
  }
  componentDidMount(){
    this.timer = setInterval(this.changeSize, 16);
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
      bottom: this.props.bottoms[width],
      left:  this.props.lefts[width],
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
  constructor(props){
    super(props);
    this.makeTriangles = this.makeTriangles.bind(this);
  }
  makeTriangles(){
    const triangles = [];
    let startWidth = this.props.maxSize;
    const degree = 60*(Math.PI/180);
    const bottoms = [];
    const lefts = [];
    // less calculations if you do them right away
    for(let j = 0; j < this.props.maxSize; j++){
      bottoms.push(-(Math.sin(degree)*-(j/2)));
      lefts.push(Math.cos(degree)*-(j/2));
    }
    for(let i = 0; i < this.props.numTrian; i++){
      triangles.push(
        <Triangle
          width={this.props.maxSize}
          startWidth={startWidth}
          borderSize={this.props.borderSize}
          degree={degree}
          bottoms={bottoms}
          lefts={lefts}/>
      )
      startWidth-=this.props.sizeDiff;
    }
    return triangles;
  }
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
        {this.makeTriangles()}
      </div>
    )
  }
}
