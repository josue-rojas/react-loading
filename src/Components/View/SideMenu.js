import React, { Component } from 'react';
import './Styles/SideMenu.css';

class HamburgerMenu extends Component{
  render(){
    const activeClass = (this.props.active ? 'active ' : '')
    return(
      <div className={'hamburger-menu menu ' + activeClass} onClick={this.props.onClick}>
        <div className="line top"></div>
        <div className="line mid"></div>
        <div className="line bottom"></div>
      </div>
    )
  }
}

class DotMenu extends Component{
  render(){
    const activeClass = (this.props.active ? 'active' : '');
    return(
      <div className={'dot-menu menu ' + activeClass} onClick={this.props.onClick}>
        <div className="dot top"></div>
        <div className="dot mid"></div>
        <div className="dot bottom"></div>
      </div>
    )
  }
}

export default class SideMenu extends Component{
  constructor(props){
    super(props);
    this.menuType = this.menuType.bind(this);
  }
  menuType(m){
    return m === 'Hamburger' ? (<HamburgerMenu active={this.props.active} onClick={()=>{this.props.handleMenuClick(this.props.positions)}} position={this.props.positions}/>) : (<DotMenu active={this.props.active} onClick={()=>{this.props.handleMenuClick(this.props.positions)}} position={this.props.positions}/>)
  }
  render(){
    const style= {
      SideMenu: {
        backgroundColor: this.props.backgroundColor,
      },
    }
    return(
      <div>
        <div style={style.icon} className={'icon ' + this.props.positions}>
          {this.menuType(this.props.menuType)}
        </div>
        <div style={style.SideMenu} className={'SideMenu pos-'+ this.props.positions + ' ' + (this.props.active ? '' : this.props.positions)}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
