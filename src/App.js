import React, { Component } from 'react';
import Spin from './Components/Spin';
import Dots from './Components/Dots';
import Bars from './Components/Bars';
import Pulse from './Components/Pulse';



const SpinExample = (
  <div>
    <Spin
      size={32}
      borderSize={5}
      primaryColor={'rgba(0, 0, 0, 0.1)'}
      secondaryColor={'red'}
      delay={'1s'}/>
    <Spin
      size={32}
      borderSize={5}
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


class App extends Component {
  render() {
    return (
      <div>
        {SpinExample}
        {DotsExample}
        {BarsExample}
        {PulseExample}
      </div>
    );
  }
}

export default App;
