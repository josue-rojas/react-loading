// LoadingComponent Creater classes for input table (much neater here)
import React from 'react';
import Spin from './Components/Spin';
import Dots from './Components/Dots';
import Bars from './Components/Bars';
import Pulse from './Components/Pulse';
import Squares from './Components/Squares';
import SpinDots from './Components/SpinDots';

class SpinnerMaker {
  static titles = ['size', 'borderSize', 'primaryColor', 'secondaryColor', 'delay', 'doubleBorder']
  static defaults = ['32', 3, 'rgba(0, 0, 0, 0.1)', 'red', '1s', 1]
  static make(props = this.defaults){
    return (<Spin
      size={props[0]}
      borderSize={props[1]}
      primaryColor={props[2]}
      secondaryColor={props[3]}
      delay={props[4]}
      doubleBorder={props[5]}/>)
  }
}

class DotMaker {
  static titles = ['size, numDots', 'color', 'delay', 'dotDelay']
  static defaults = [32, 10, 'rgb(130, 200, 253)', 1000, 100]
  static make(props=this.defaults){
    return(
      <Dots
        size={props[0]}
        numDots={props[1]}
        color={props[2]}
        delay={props[3]}
        dotDelay={props[4]}/>
    )
  }
}


export {SpinnerMaker, DotMaker};


const SpinExample = (
  <div>
    <Spin
      size={32}
      borderSize={3}
      primaryColor={'rgba(0, 0, 0, 0.1)'}
      secondaryColor={'red'}
      delay={'1s'}/>
    <Spin
      size={32}
      borderSize={10}
      primaryColor={'rgba(0, 0, 0, 0.1)'}
      secondaryColor={'red'}
      delay={'750ms'}
      doubleBorder={true}/>
  </div>
)

const DotsExample = (
  <div>
    <Dots
      size={32}
      numDots={10}
      color={'rgb(71, 255, 253)'}
      delay={1000}
      dotDelay={100}/>
    <Dots
      size={12}
      numDots={5}
      color={'rgb(130, 200, 253)'}
      delay={750}
      dotDelay={0}/>
  </div>
)

const BarsExample = (
  <div>
    <Bars
      width={'10px'}
      maxHeight={'30px'}
      minHeight={'5px'}
      numBars={5}
      color={'black'}
      delay={1000}
      barDelay={100}/>
    <Bars
      width={'10px'}
      maxHeight={'50px'}
      minHeight={'1px'}
      numBars={31}
      color={'rgb(134, 255, 107)'}
      delay={1000}
      barDelay={150}/>
  </div>
)

const PulseExample = (
  <div>
    <Pulse
      maxSize={52}
      minSize={10}
      borderSize={1}
      color={'rgb(223, 77, 255)'}
      delay={1000}/>
    <Pulse
      maxSize={60}
      minSize={10}
      borderSize={5}
      color={'rgb(255, 10, 105)'}
      delay={750}/>
  </div>
)

const SquaresExample = (
  <div>
    <Squares
      size={52}
      numSquares={4}
      delay={2000}
      squareDelay={70}
      color={'rgb(103, 77, 255)'}
      alternate={true}/>
    <Squares
      size={102}
      numSquares={5}
      delay={2000}
      squareDelay={100}
      color={'rgb(103, 77, 155)'}/>
  </div>
)

const SpinDotsExample = (
  <div>
    <SpinDots
      size={20}
      circleSize={3}
      delay={2000}
      color={'rgb(103, 77, 255)'}/>
    <SpinDots
      size={40}
      circleSize={10}
      delay={1500}
      color={'rgb(13, 77, 55)'}/>
  </div>
)
