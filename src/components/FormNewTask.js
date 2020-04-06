import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class FormNewTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      text: '',
      time: Number
    }
  }
  render() {
    return (
      <div className="TaskEditor">
        <div className="TaskEditor__block--flexBorder">
          <h2 className="TaskEditor__title">Nowe zadanie</h2>
          <button className="btn btn--options">---</button>
        </div>
        <label className="TaskEditor__label">
          <span className="TaskEditor__label__name">Co robisz:</span>
          <input className="TaskEditor__label__input" type="text" placeholder="Nazwa zadania" value={this.state.title} onChange={this.handleTitle} />
        </label>
        <label className="TaskEditor__label">
          <span className="TaskEditor__label__name">Przez ile czasu:</span>
          <input className="TaskEditor__label__input" type="number" placeholder="Czas trwania zadania" value={this.state.time} onChange={this.handleTime} />
        </label>
        <label className="TaskEditor__label">
          <span className="TaskEditor__label__name">Zadania:</span>
          <textarea className="TaskEditor__textarea" rows="6" placeholder="Opis zadania" value={this.state.text} onChange={this.handleText}></ textarea>
        </label>         
        <button className="btn btn--add" onClick={this.handleSubmit}>Dodaj zadanie</button>
      </div>
    )
  }

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  }

  handleText = (e) => {
    this.setState({ text: e.target.value });
  }
  
  handleTime = (e) => {
    this.setState({ time: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if( this.state.title.length === 0 || this.state.text.length === 0 || this.state.time.length === 0 ) return;

    const newTask = {
      uuid: uuidv4(),
      title: this.state.title, 
      text: this.state.text,
      time: this.state.time
    }

    this.setState({
      title: '', 
      text: '',
      time: ''
    })

    return this.props.task(newTask);
  }
}
