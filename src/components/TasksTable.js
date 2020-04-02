import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class TasksTable extends Component {
  constructor() {
    super();

    this.state = {
      uuid: '',
      title: '',
      text: '',
      time: Number,
      tasks: [
        {
          'uuid': uuidv4(),
          'title': 'Tytuł 1',
          'text': 'lorem',
          'time': '1h'
        }
      ]
    }
  }


  render() {
    const { tasks, title, text, time } = this.state;

    return (
      <React.Fragment>
        <div className="TaskEditor">
          <div className="TaskEditor__block--flexBorder">
            <h2 className="TaskEditor__title">Nowe zadanie</h2>
            <button className="TaskEditor__button TaskEditor__button--options">---</button>
          </div>
          <label className="TaskEditor__label">
            <span className="TaskEditor__label__name">Co robisz:</span>
            <input className="TaskEditor__label__input" type="text" value={title} onChange={this.handleTitle} />
          </label>
          <label className="TaskEditor__label">
            <span className="TaskEditor__label__name">Przez ile czasu:</span>
            <input className="TaskEditor__label__input" type="number" value={time} onChange={this.handleTime} />
          </label>
          <label className="TaskEditor__label">
            <span className="TaskEditor__label__name">Zadania:</span>
            <textarea className="TaskEditor__textarea" rows="6" value={text} onChange={this.handleText}></ textarea>
          </label>         
          <button className="TaskEditor__button TaskEditor__button--add" onClick={this.handleSubmit}>Dodaj zadanie</button>
        </div>

        <ul>
          {
            tasks.map( task => {
            return (
              <li key={task.uuid}>
                <h5>Tytuł: {task.title}</h5>
                <p>Opis: {task.text}</p>
                <p>Czas: {task.time} min</p>
                <button>Zacznij</button>
                <button>Usuń</button>
              </li>
            )
            })
          }
        </ul>
      </React.Fragment>
    )
  }

  handleTitle = (e) => {
    this.setState({title: e.target.value});
  }

  handleText = (e) => {
    this.setState({text: e.target.value});
  }

  handleTime = (e) => {
    this.setState({time: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if( this.state.title.length === 0 || this.state.text.length === 0 || this.state.time.length === 0) return;

    const newTask = {
      uuid: uuidv4(),
      title: this.state.title, 
      text: this.state.text,
      time: this.state.time
    }

    this.setState(state => ({
      tasks: state.tasks.concat(newTask),
      title: '', 
      text: Number,
      time: ''
    }));
  }

}
