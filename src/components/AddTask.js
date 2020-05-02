import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class AddTask extends React.Component {
  state = {
    title: '',
    time: '',
    text: ''
  }

  onTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  onTimeChange = (e) => {
    this.setState({ time: e.target.value });
  }

  onTextChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if( this.state.title.length === 0 || this.state.time.length === 0 || this.state.text.length === 0 ) return;

    this.props.onAddTask({
      uuid: uuidv4(),
      title: this.state.title, 
      time: this.state.time,
      text: this.state.text
    });

    this.setState({
      title: '',
      time: '',
      text: ''
    });
  }

  render () {
    const { title, time, text } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={`TaskEditor`}>
        <div className="TaskEditor__block--flexBorder">
          <h2 className="TaskEditor__title">Nowe zadanie</h2>
          <button className="btn btn--options">---</button>
        </div>
        <label className="TaskEditor__label">
          <span className="TaskEditor__label__name">Co robisz:</span>
          <input className="TaskEditor__label__input" type="text" placeholder="Nazwa zadania" value={title} onChange={this.onTitleChange} />
        </label>
        <label className="TaskEditor__label">
          <span className="TaskEditor__label__name">Przez ile czasu:</span>
          <input className="TaskEditor__label__input" type="number" placeholder="Czas trwania zadania" value={time} onChange={this.onTimeChange} />
        </label>
        <label className="TaskEditor__label">
          <span className="TaskEditor__label__name">Zadania:</span>
          <textarea className="TaskEditor__textarea" rows="6" placeholder="Opis zadania" value={text} onChange={this.onTextChange} ></ textarea>
        </label>         
        <button className="btn btn--add">Dodaj zadanie</button>
      </form>
    );
  }
}

export default AddTask;