import React, { Component } from 'react';
import Spin from './Components/Spin';
import Dots from './Components/Dots'

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


class App extends Component {
  render() {
    return (
      <div>
        {SpinExample}
        {DotsExample}
      </div>
    );
  }
}

export default App;
