import React, { Component } from 'react';

export default class Inputs extends Component{
  constructor(props){
    super(props);
    this.state = {
      values: this.props.LoaderMaker.defaults,
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
      inputs.push(<input
        onChange={(e) => this.handleInput(e, i)}
        value={this.state.values[i]}/>)
    }
    return inputs;
  }
  render(){
    const style = {
      display: 'flex',
      flexDirection: 'column',
    }
    return(
      <div style={style}>
        {this.makeInput()}
      </div>
    )
  }
}
