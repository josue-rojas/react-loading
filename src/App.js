import React, { Component } from 'react';
import InputTable from './InputTable'
import * as Loaders from './LoaderMakers';

// BUGS BUGS BUGS (and features):
// loaders that have 2 delays do not re render correctly when changing the inner delay
// does keypress navigation does not work when resize (need to check resize and update)
// booleans should be 0 or 1 in loaders to make it easier to change in input
// should have navigation button so mobile can use the auto scrolling
// add smooth auto scroll

// a FullView is a div that represents a full screen page with everything center.....simple..... (a slideshow sort of)
class FullView extends Component{
  render(){
    const style = {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: this.props.bgColor,
      backgroundImage: this.props.backgroundImage,
      overflow: 'hidden',
    }
    return(
      <div className='Full-View' style={style}>
        {this.props.stuff}
      </div>
    )
  }
}

class InnerView extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValues: this.props.maker.defaults,
      loader: this.props.maker.make(this.props.maker.defaults),
    }
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e, inputIndex){
    const inputValues = this.state.inputValues.slice();
    inputValues[inputIndex] = e.target.value;
    this.setState({
      inputValues: inputValues,
      loader: this.props.maker.make(inputValues),
    })
  }
  render(){
    const innerViewStyle={
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
     }
    return(
      <div style={innerViewStyle}>
        {this.state.loader}
        <InputTable
          title={'Spinner'}
          titles={this.props.maker.titles}
          values={this.state.inputValues}
          handleInput={this.handleInput}/>
      </div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      positions: [],
      viewSize: 0,
    }
    this.findNext = this.findNext.bind(this);
    this.handleKeys = this.handleKeys.bind(this);
  }

  componentDidMount(){
    const views = document.getElementsByClassName('Full-View');
    const viewsPosition = [];
    for(let i = 0; i < views.length; i++){
      viewsPosition.push(views[i].offsetTop)
    }
    this.setState({
      positions: viewsPosition,
      // will give error if view 1 does not exist
      viewSize: views[1].offsetTop,
    })
  }

  findNext(currPos, forward){
    // cant divide by zero
    if(currPos == 0) return forward ? this.state.positions[1] : this.state.positions[-1] ;
    return this.state.positions[Math.floor(currPos / this.state.viewSize) + (forward ? 1 : -1)];
  }

  handleKeys(e){
    let currPos = window.pageYOffset;
    let nextPos = 0;
    switch(e.keyCode){
      case 37:
        // left
        nextPos = this.findNext(currPos, false)
        break;
      case 38:
        // up
        nextPos = this.findNext(currPos, false)
        break;
      case 39:
        // right
        nextPos = this.findNext(currPos, true)
        break;
      case 40:
        // down
        nextPos = this.findNext(currPos, true)
        break;
      default:
        break;
    }
    if(nextPos != undefined) window.scroll(0, nextPos);
  }
  render() {
    // loaders inner views
    const spinnnerInner = (<InnerView maker={Loaders.SpinnerMaker}/>)
    const dotInner = (<InnerView maker={Loaders.DotMaker}/>)
    const barsInner = (<InnerView maker={Loaders.BarsMaker}/>)
    const pulseInner = (<InnerView maker={Loaders.PulseMaker}/>)
    const squaresInner = (<InnerView maker={Loaders.SquaresMaker}/>)
    const spinDotsInner = (<InnerView maker={Loaders.SpinDotsMaker}/>)

    return (
      <div onKeyDown={this.handleKeys} tabIndex="0">
        <FullView stuff={spinnnerInner} bgColor={'rgb(225,225,225)'}/>
        <FullView stuff={dotInner} bgColor={'rgb(225,225,225)'}/>
        <FullView stuff={barsInner} bgColor={'rgb(225,225,225)'}/>
        <FullView stuff={pulseInner} bgColor={'rgb(225,225,225)'}/>
        <FullView stuff={squaresInner} bgColor={'rgb(225,225,225)'}/>
        <FullView stuff={spinDotsInner} bgColor={'rgb(225,225,225)'}/>
      </div>
    );
  }
}

export default App;
