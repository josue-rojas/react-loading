import React, { Component } from 'react';
import SideMenu from './Components/View/SideMenu'
import Inputs from './Components/View/Inputs'
import * as Loaders from './Components/View/LoaderMakers';

// BUGS BUGS BUGS (and features):
// booleans should be 0 or 1 in loaders to make it easier to change in input

export default class App extends Component{
  constructor(props){
    super(props);
    const indexMatch = window.location.hash.match(/\d+/);
    const LoaderMaker = indexMatch && Loaders.Makers[indexMatch[0]] ? Loaders.Makers[indexMatch[0]] : Loaders.Makers[0];
    this.state = {
      leftMenu: false,
      rightMenu: false,
      LoaderMaker: LoaderMaker,
      inputValues: LoaderMaker.defaults

    }
    this.changeLoader = this.changeLoader.bind(this);
    this.makeLinks = this.makeLinks.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
    this.getInputs = this.getInputs.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }
  componentDidMount() {
    window.addEventListener("hashchange", this.changeLoader, false);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.changeLoader, false);
  }
  changeLoader(){
    const indexMatch = window.location.hash.match(/\d+/);
    const LoaderMaker = indexMatch && Loaders.Makers[indexMatch[0]] ? Loaders.Makers[indexMatch[0]] : Loaders.Makers[0];
    this.setState({
      rightMenu: false,
      LoaderMaker: LoaderMaker,
      inputValues: LoaderMaker.defaults
    })
  }
  makeLinks(){
    const links = [];
    for(let i = 0; i < Loaders.Makers.length; i++){
      links.push(
        <a className='menu-link' href={'#' + i}>
          {Loaders.Makers[i].title}
          <div className='line'/>
        </a>)
      }
    return links;
  }
  handleInputs(newInputs){
    this.setState({inputValues: newInputs})
  }
  getInputs(){
    return(<Inputs key={this.state.LoaderMaker.title} LoaderMaker={this.state.LoaderMaker} handleInput={this.handleInputs}/>)
  }
  handleMenuClick(menu){
    this.setState({
      leftMenu: menu === 'left' ? !this.state.leftMenu : false,
      rightMenu: menu === 'right' ? !this.state.rightMenu : false,
    })
  }
  render() {
    return (
      <div>
        <div className='menus'>
          <SideMenu
            backgroundColor='rgba(50,50,200,.3)'
            positions='left'
            active={this.state.leftMenu}
            handleMenuClick={this.handleMenuClick}
            menuType='Dots'>
            {this.getInputs()}
          </SideMenu>
          <SideMenu
            backgroundColor='rgba(200,50,200,.3)'
            positions='right'
            active={this.state.rightMenu}
            handleMenuClick={this.handleMenuClick}
            menuType='Hamburger'>
            {this.makeLinks()}
          </SideMenu>
        </div>
        <div className={'loader-box ' + (this.state.leftMenu || this.state.rightMenu ? 'active' : '')}>
          {this.state.LoaderMaker.make(this.state.inputValues)}
        </div>
      </div>
    );
  }
}

// export default App;
