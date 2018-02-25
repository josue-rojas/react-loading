import React, { Component } from 'react';
import './Styles/Inputs.css';

export default class Inputs extends Component{
  constructor(props){
    super(props);
    this.state = {
      values: this.props.LoaderMaker.defaults,
      titles: this.props.LoaderMaker.titles,
    }
    this.makeInput = this.makeInput.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e, i){
    const values = this.state.values.slice();
    values[i] = e.target.value;
    this.setState({
      values: values,
    })
    this.props.handleInput(values)
  }
  makeInput(){
    const inputs = [];
    for(let i = 0; i < this.state.values.length; i++){
      inputs.push(
        <div className='inputs'>
          <div className='input-title'>
            {this.state.titles[i]}
          </div>
          <input
            className='inputs-box'
            onChange={(e) => this.handleInput(e, i)}
            value={this.state.values[i]}/>
        </div>)
    }
    return inputs;
  }
  render(){
    const style = {
      display: 'flex',
      flexDirection: 'column',
      width: '75%',
    }
    return(
      <div style={style}>
        {this.makeInput()}
      </div>
    )
  }
}
