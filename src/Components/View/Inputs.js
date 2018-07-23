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
  handleInput(e, i, isBool=false){
    const values = this.state.values.slice();
    values[i] = isBool ? !values[i] : e.target.value;
    this.setState({
      values: values,
    })
    this.props.handleInput(values)
  }
  makeInput(){
    const inputs = [];
    for(let i = 0; i < this.state.values.length; i++){
      // input_toggle is for booleans to make a toggle instead of normal text inputs
      let input_toggle = typeof(this.state.values[i]) === "boolean" ? 'toggle': ' ';
      inputs.push(
        <div className='inputs'>
          <div className='input-title'>
            {this.state.titles[i]}
          </div>
          <input
            className={`inputs-box ${input_toggle}`}
            onChange={(e) => this.handleInput(e, i)}
            value={this.state.values[i]}/>
          <div
            className={`div-toggle ${input_toggle} ${this.state.values[i]}`}
            onClick={()=> this.handleInput(null, i, true)}>
            <div class={`toggler ${this.state.values[i]}`}></div>
          </div>
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
