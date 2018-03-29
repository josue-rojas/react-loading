import React, { Component } from 'react';
import './Styles/Gradient.css';

// props
// width: string of width (include px or %)
// height: string of height (include px or %)
// colors: string of colors for gradients seperated by comma
// delay: int of delay for aniimation in ms
// isCircle: boolean wether it is a circle or not
// rotate: boolean to activate rotate animation

export default class Gradient extends Component {
  render(){
    const rotate = this.props.rotate ? 'GradientRotate' : ''
    const style = {
      gradient: {
        width: this.props.width,
        height: this.props.height,
        // transition: '400ms',
        background: 'linear-gradient(to right, '+ this.props.colors +')',
        // this should change according to the num of colors but it also needs to change in the css
        backgroundSize: '300%',
        animation: 'Gradient '+ this.props.delay + 'ms linear infinite, ' + rotate + ' '+ this.props.delay + 'ms linear infinite',
        borderRadius: this.props.circle ? '100%' : '',
        // animationDirection: this.props.alternate ? 'alternate' : '',
      }
    }
    return(
      <div style={style.gradient}>
      </div>
    )
  }
}
