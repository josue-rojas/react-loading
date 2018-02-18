import React, { Component } from 'react';
import './Styles/HyperTriangle.css';

// inspired by https://codepen.io/foleyatwork/pen/ZJodgr

export default class HyperTriangle extends Component{
  render(){
    const style = {
      box: {
        position: 'relative',
        width: Math.sqrt(2)*this.props.maxSize + 'px',
        height: Math.sqrt(2)*this.props.maxSize + 'px',
      },
      bottom: {
        width: this.props.maxSize + 'px',
        height: this.props.borderSize + 'px',
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 0,
      },
      left: {
        width: this.props.maxSize + 'px',
        height: this.props.borderSize + 'px',
        backgroundColor: 'black',
        position: 'absolute',
        transform: 'rotate(40deg)',
        bottom: 'calc(0% + ' + this.props.maxSize/2 + 'px'
      },
      right: {
        width: this.props.maxSize + 'px',
        height: this.props.borderSize + 'px',
        backgroundColor: 'black',
        position: 'absolute',
        transform: 'rotate(-40deg)',
        // right: 0,
        bottom: 'calc(0% + ' +  (Math.sqrt(2)*this.props.maxSize)/2+ 'px'
      },
      triangle: {
        height: 0,
        width: 0,
        border: '20px solid rgba(0,0,0,0)',
        borderTop: '20px solid green',
        position: 'relative'
      },
      innerTriangle: {
        height: 0,
        width: 0,
        border: '5px solid rgba(0,0,0,0)',
        borderTop: '5px solid black',
        position: 'absolute'
      }
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
