// LoadingComponent Creater classes for input table (much neater here displaying)
// if loader's prop must be an int then you need to parse it or it will be consider a string ("100" + "100" + "100100" wereas 100+100 = 200)
import React from 'react';
import Spin from './Components/Spin';
import Dots from './Components/Dots';
import Bars from './Components/Bars';
import Pulse from './Components/Pulse';
import Squares from './Components/Squares';
import SpinDots from './Components/SpinDots';
import Cylon from './Components/Cylon';
import HyperTriangle from './Components/HyperTriangle';

class SpinnerMaker {
  static title = 'Spinner'
  static titles = ['size', 'borderSize', 'primaryColor', 'secondaryColor', 'delay', 'doubleBorder']
  static defaults = [100, 3, 'rgba(0, 0, 0, 0.1)', 'red', '1s', 1]
  static make(props = this.defaults){
    return (<Spin
      key={Math.random()}
      size={props[0]}
      borderSize={props[1]}
      primaryColor={props[2]}
      secondaryColor={props[3]}
      delay={props[4]}
      doubleBorder={props[5]}/>)
  }
}

class DotMaker {
  static title = 'Dots';
  static titles = ['size', 'numDots', 'color', 'delay', 'dotDelay']
  static defaults = [25, 10, 'rgb(130, 200, 253)', 1000, 100]
  static make(props=this.defaults){
    return(
      <Dots
        key={Math.random()}
        size={props[0]}
        numDots={props[1]}
        color={props[2]}
        delay={props[3]}
        dotDelay={parseInt(props[4])}/>
    )
  }
}

class BarsMaker {
  static title = 'Bars';
  static titles = ['width', 'maxHeight', 'minHeight', 'numBars', 'color', 'delay', 'barDelay']
  static defaults = [7, 70, 1, 31, 'rgb(134, 255, 253)',1000, 150]
  static make(props=this.defaults){
    return(
      <Bars
        key={Math.random()}
        width={props[0]}
        maxHeight={props[1]}
        minHeight={props[2]}
        numBars={props[3]}
        color={props[4]}
        delay={props[5]}
        barDelay={parseInt(props[6])}/>
    )
  }
}


class PulseMaker {
  static title = 'Pulse';
  static titles = ['maxSize', 'minSize', 'borderSize', 'color', 'delay']
  static defaults = [100, 10, 1, 'rgb(223, 77, 255)',1000]
  static make(props=this.defaults){
    return(
      <Pulse
        key={Math.random()}
        maxSize={props[0]}
        minSize={props[1]}
        borderSize={props[2]}
        color={props[3]}
        delay={props[4]}/>
    )
  }
}

class SquaresMaker {
  static title = 'Squares';
  static titles = ['size', 'numSquares', 'delay', 'squareDelay', 'color', 'alternate']
  static defaults = [100, 4, 2000, 70, 'rgb(103, 77, 255)', 1]
  static make(props=this.defaults){
    return(
      <Squares
        key={Math.random()}
        size={props[0]}
        numSquares={props[1]}
        delay={props[2]}
        squareDelay={parseInt(props[3])}
        color={props[4]}
        alternate={props[5]}/>
    )
  }
}

class SpinDotsMaker {
  static title = 'SpinDots';
  static titles = ['size', 'circleSize', 'delay', 'color']
  static defaults = [100, 10, 1500, 'rgb(13, 77, 55)']
  static make(props=this.defaults){
    return(
      <SpinDots
        key={Math.random()}
        size={props[0]}
        circleSize={props[1]}
        delay={props[2]}
        color={props[3]}/>
    )
  }
}

class CylonMaker {
  static title = 'Cylon';
  static titles = ['maxWidth', 'minWidth', 'height', 'numRect', 'color', 'opacityChange', 'delay', 'rectDelay']
  static defaults = [200, 30, 20, 5, 'rgb(255,70,55)', .2, 750, 65]
  static make(props=this.defaults){
    return(
      <Cylon
        key={Math.random()}
        maxWidth={parseInt(props[0])}
        minWidth={parseInt(props[1])}
        height={props[2]}
        numRect={props[3]}
        color={props[4]}
        opacityChange={props[5]}
        delay={props[6]}
        rectDelay={parseInt(props[7])}/>
    )
  }
}

class HyperTriangleMaker {
  static title = 'HyperTriangle';
  static titles = ['maxSize', 'borderSize']
  static defaults = [65, 5]
  static make(props=this.defaults){
    return(
      <HyperTriangle
        key={Math.random()}
        maxSize={props[0]}
        borderSize={props[1]}/>
    )
  }
}

export const Makers = [SpinnerMaker, DotMaker, BarsMaker, PulseMaker, SquaresMaker, SpinDotsMaker, CylonMaker, HyperTriangleMaker]
