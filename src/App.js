import React, { Component } from 'react';
import InputTable from './InputTable'
import * as Loaders from './LoaderMakers';

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
    super(props)
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
        {this.props.maker.make()}
        <InputTable
          title={'Spinner'}
          titles={this.props.maker.titles}
          defaults={this.props.maker.defaults}/>
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
    const spinnnerInner = (<InnerView maker={Loaders.SpinnerMaker}/>)
    const dotInner = (<InnerView maker={Loaders.DotMaker}/>)

    return (
      <div onKeyDown={this.handleKeys} tabIndex="0">
        <FullView stuff={spinnnerInner} bgColor={'rgb(225,225,225)'}/>
        <FullView stuff={dotInner} bgColor={'rgb(225,225,225)'}/>
      </div>
    );
  }
}

export default App;
