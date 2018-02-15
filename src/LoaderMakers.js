// LoadingComponent Creater classes for input table (much neater here displaying)
// if loader's prop must be an int then you need to parse it or it will be consider a string ("100" + "100" + "100100" wereas 100+100 = 200)
import React from 'react';
import Spin from './Components/Spin';
import Dots from './Components/Dots';
import Bars from './Components/Bars';
import Pulse from './Components/Pulse';
import Squares from './Components/Squares';
import SpinDots from './Components/SpinDots';

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

export {SpinnerMaker, DotMaker, BarsMaker, PulseMaker, SquaresMaker, SpinDotsMaker};

// ----------------------
// other examples which look nice
// const SpinExample = (
//   <div>
//     <Spin
//       size={32}
//       borderSize={3}
//       primaryColor={'rgba(0, 0, 0, 0.1)'}
//       secondaryColor={'red'}
//       delay={'1s'}/>
//     <Spin
//       size={32}
//       borderSize={10}
//       primaryColor={'rgba(0, 0, 0, 0.1)'}
//       secondaryColor={'red'}
//       delay={'750ms'}
//       doubleBorder={true}/>
//   </div>
// )
//
// const DotsExample = (
//   <div>
//     <Dots
//       size={32}
//       numDots={10}
//       color={'rgb(71, 255, 253)'}
//       delay={1000}
//       dotDelay={100}/>
//     <Dots
//       size={12}
//       numDots={5}
//       color={'rgb(130, 200, 253)'}
//       delay={750}
//       dotDelay={0}/>
//   </div>
// )
//
// const BarsExample = (
//   <div>
//     <Bars
//       width={10}
//       maxHeight={30}
//       minHeight={5}
//       numBars={5}
//       color={'black'}
//       delay={1000}
//       barDelay={100}/>
//     <Bars
//       width={10}
//       maxHeight={50}
//       minHeight={1}
//       numBars={31}
//       color={'rgb(134, 255, 107)'}
//       delay={1000}
//       barDelay={150}/>
//   </div>
// )
//
// const PulseExample = (
//   <div>
//     <Pulse
//       maxSize={52}
//       minSize={10}
//       borderSize={1}
//       color={'rgb(223, 77, 255)'}
//       delay={1000}/>
//     <Pulse
//       maxSize={60}
//       minSize={10}
//       borderSize={5}
//       color={'rgb(255, 10, 105)'}
//       delay={750}/>
//   </div>
// )
//
// const SquaresExample = (
//   <div>
//     <Squares
//       size={52}
//       numSquares={4}
//       delay={2000}
//       squareDelay={70}
//       color={'rgb(103, 77, 255)'}
//       alternate={true}/>
//     <Squares
//       size={102}
//       numSquares={5}
//       delay={2000}
//       squareDelay={100}
//       color={'rgb(103, 77, 155)'}/>
//   </div>
// )
//
// const SpinDotsExample = (
//   <div>
//     <SpinDots
//       size={20}
//       circleSize={3}
//       delay={2000}
//       color={'rgb(103, 77, 255)'}/>
//     <SpinDots
//       size={40}
//       circleSize={10}
//       delay={1500}
//       color={'rgb(13, 77, 55)'}/>
//   </div>
// )
