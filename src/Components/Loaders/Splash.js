import React, { Component } from 'react';
import './Styles/Splash.css';

// props
// maxSize: int (px) of max size of splash
// numSplash: int of number of circles
// color: string of color of circles
// delay: int delay of single splash
// splashDelay: int delay after each splash
// isCircle: boolean isCircle
// alternate: boolean to alternate animation
// rotate: boolean to let animation rotate

export default class Splash extends Component{
  constructor(props) {
    super(props);
    this.makeSplash = this.makeSplash.bind(this);
    this.getSplashStyle = this.getSplashStyle.bind(this);
  }

  getSplashStyle(delay){
    const rotate = this.props.rotate ? 'splashRotate' : ''
    return(
      {
        border: `1px solid ${this.props.color}`,
        borderRadius: this.props.isCircle ? '100%': '',
        position: 'absolute',
        margin: 'auto',
        animation: `splash ${this.props.delay}ms linear infinite, ${rotate} ${this.props.delay}ms linear infinite`,
        animationDelay: `${delay}ms`,
        animationDirection: this.props.alternate ? 'alternate' : '',
      }
    )
  }

  makeSplash(){
    const splash = [];
    let delay = 0;
    for(let i = 0; i < this.props.numSplash; i++){
      splash.push(<div key={`${i}splash`} style={this.getSplashStyle(delay)}/>)
      delay+=this.props.splashDelay;
    }
    return(splash)
  }

  render(){
    const style={
      wrapper: {
        width: this.props.maxSize ,
        height: this.props.maxSize ,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      },
    }
    return(
      <div style={style.wrapper}>
        {this.makeSplash()}
      </div>
    )
  }
}
