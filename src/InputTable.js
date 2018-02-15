import React, { Component } from 'react';
// seperated this cause it was too big...(to fail?!?!?!)
export default class InputTable extends Component{
  constructor(props){
    super(props);
  }
  createInputRows(titles, defaults){
    const inputRows = [];
    const style = {
      fontWeight: 800,
      width: '150px',
      textAlign: 'center',
      display: 'inline-block',
      border: '1px solid black',
      padding: '3px 0',
    }
    console.log(titles)
    for(let i = 0; i < titles.length; i++){
      inputRows.push(
        <div>
          <div style={style}>{titles[i]}</div>
          <div style={style}>{defaults[i]}</div>
        </div>
      )
    }
    return inputRows;
  }
  render(){
    const style={
      title: {
        fontWeight: 800,
        fontSize: '1.2rem',
        textAlign: 'center',
        padding: '7px 0',
        marginTop: '15px',
        border: '1px solid black',
        backgroundColor: 'black',
        color: 'white',
      },
      th: {
        fontWeight: 800,
        width: '150px',
        textAlign: 'center',
        display: 'inline-block',
        border: '1px solid black',
        padding: '3px 0',
      },
    }
    const inputRows = this.createInputRows(this.props.titles, this.props.defaults);
    return(
      <div>
        <div style={style.title}>{this.props.title}</div>
        <div>
          <div style={style.th}>Props</div>
          <div style={style.th}>Input</div>
        </div>
        {inputRows}
      </div>
    )
  }
}
