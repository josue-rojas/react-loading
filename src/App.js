import React, { Component } from 'react';
import InputTable from './Components/View/InputTable'
import SideMenu from './Components/View/SideMenu'
import * as Loaders from './Components/View/LoaderMakers';

// BUGS BUGS BUGS (and features):
// booleans should be 0 or 1 in loaders to make it easier to change in input

// a FullView is a div that represents a full screen page with everything center.....simple..... (a slideshow sort of)
class FullView extends Component{
  render(){
    const style = {
      width: '100vw',
      height: this.props.height, //set by parent to handle window resize
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
          title={this.props.maker.title}
          titles={this.props.maker.titles}
          values={this.state.inputValues}
          handleInput={this.handleInput}/>
      </div>
    )
  }
}

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       positions: [],
//       viewSize: 0,
//       windowHeight: 0,
//     }
//     this.handleResize = this.handleResize.bind(this);
//     this.findNext = this.findNext.bind(this);
//     this.handleKeys = this.handleKeys.bind(this);
//   }
//   componentDidMount(){
//     this.handleResize();
//     window.addEventListener('resize', this.handleResize);
//   }
//   componentWillUnmount(){
//     window.removeEventListener('resize', this.handleResize);
//   }
//   handleResize(){
//     const views = document.getElementsByClassName('Full-View');
//     const viewsPosition = [];
//     const viewSize = window.innerHeight;
//     let viewPos = 0;
//     for(let i = 0; i < views.length; i++){
//       viewsPosition.push(viewPos);
//       viewPos+=viewSize;
//     }
//     this.setState({
//       positions: viewsPosition,
//       viewSize: viewSize,
//     })
//   }
//   findNext(currPos, forward){
//     // cant divide by zero
//     if(currPos === 0) return forward ? this.state.positions[1] : this.state.positions[-1] ;
//     return this.state.positions[Math.floor(currPos / this.state.viewSize) + (forward ? 1 : -1)];
//   }
//   handleKeys(e){
//     let nextPos = undefined;
//     let currPos = window.pageYOffset;
//     switch(e.keyCode){
//       case 37:
//         // left
//         nextPos = this.findNext(currPos, false)
//         break;
//       case 38:
//         // up
//         nextPos = this.findNext(currPos, false)
//         break;
//       case 39:
//         // right
//         nextPos = this.findNext(currPos, true)
//         break;
//       case 40:
//         // down
//         nextPos = this.findNext(currPos, true)
//         break;
//       default:
//         break;
//     }
//     if(nextPos !== undefined) window.scroll(0, nextPos);
//   }
//   // make views automatically just add them in Loaders.Makers array
//   makeViews(height){
//     const Views = [];
//     for(let i = 0; i < Loaders.Makers.length; i++){
//       Views.push(
//         <FullView
//           key={i+'FullView'}
//           stuff={(<InnerView maker={Loaders.Makers[i]}/>)}
//           bgColor={'rgb(225,225,225)'}
//           height={height}/>
//       )
//     }
//     return Views;
//   }
//   render() {
//     const Views = this.makeViews(this.state.viewSize);
//     return (
//       <div onKeyDown={this.handleKeys} tabIndex="0">
//         <SideMenu
//           backgroundColor='rgba(50,50,200,.5)'
//           positions='left'
//           menuType='dots'>
//           Hello
//         </SideMenu>
//         <SideMenu
//           backgroundColor='rgba(200,50,200,.5)'
//           positions='right'
//           menuType='Hamburger'>
//           bye
//         </SideMenu>
//       </div>
//     );
//   }
// }

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      leftMenu: false,
      rightMenu: false,
      index: window.location.hash ? window.location.hash.match(/\d+/)[0] : 0,
    }
    this.changeLoader = this.changeLoader.bind(this);
    this.makeLinks = this.makeLinks.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }
  componentDidMount() {
    window.addEventListener("hashchange", this.changeLoader, false);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.changeLoader, false);
  }
  changeLoader(){
    this.setState({
      index: window.location.hash.match(/\d+/)[0],
      rightMenu: false,
    })
  }
  makeLinks(){
    const links = [];
    const makerMap = {};
    for(let i = 0; i < Loaders.Makers.length; i++){
      links.push(
        <a className='menu-link' href={'#' + i}>
          {Loaders.Makers[i].title}
        </a>)
      }
    return links;
  }
  getLoader(i){
    return Loaders.Makers[this.state.index] ? Loaders.Makers[this.state.index].make() : Loaders.Makers[0].make()
  }
  handleMenuClick(menu){
    this.setState({
      leftMenu: menu === 'left' ? !this.state.leftMenu : false,
      rightMenu: menu === 'right' ? !this.state.rightMenu : false,
    })
  }
  render() {
    return (
      <div onKeyDown={this.handleKeys} tabIndex="0">
        <div className='menus'>
          <SideMenu
            backgroundColor='rgba(50,50,200,.4)'
            positions='left'
            active={this.state.leftMenu}
            handleMenuClick={this.handleMenuClick}
            menuType='Dots'>
            Hello
          </SideMenu>
          <SideMenu
            backgroundColor='rgba(200,50,200,.4)'
            positions='right'
            active={this.state.rightMenu}
            handleMenuClick={this.handleMenuClick}
            menuType='Hamburger'>
            {this.makeLinks()}
          </SideMenu>
        </div>
        <div className={'loader-box ' + (this.state.leftMenu || this.state.rightMenu ? 'active' : '')}>
          {this.getLoader()}
        </div>
      </div>
    );
  }
}

// export default App;
