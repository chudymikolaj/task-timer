import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class FormNewTask extends React.Component {
  state = {
    title: '',
    text: '',
    time: '',
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

  onChangeTask = (e) => {
    e.preventDefault();

    if( this.state.title.length === 0 || this.state.time.length === 0 || this.state.text.length === 0 ) return;

    this.props.onChangeTask({
      uuid: uuidv4(),
      title: this.state.title,
      text: this.state.text,
      time: this.state.time,
    });
  }

  render() {
    const { title, text, time } = this.state;
    const { isEditable } = this.props;

    return (
      <form onSubmit={this.onChangeTask} className={`TaskEditor ${isEditable ? null : 'inactive'}`}>
        <div className="TaskEditor__block--flexBorder">
          <h2 className="TaskEditor__title">{isEditable ? 'Edytowanie zadania' : 'Zadanie'}</h2>
        </div>
        <label className="TaskEditor__label">
          <span className="TaskEditor__label__name">Co robisz:</span>
          <input className="TaskEditor__label__input" type="text" placeholder="Nazwa zadania" value={title} onChange={this.onTitleChange} disabled={ !isEditable } />
        </label>
        <label className="TaskEditor__label">
          <span className="TaskEditor__label__name">Przez ile czasu:</span>
          <input className="TaskEditor__label__input" type="number" placeholder="Czas trwania zadania" value={time} onChange={this.onTimeChange} disabled={!isEditable} />
        </label>
        <label className="TaskEditor__label">
          <span className="TaskEditor__label__name">Zadania:</span>
          <textarea className="TaskEditor__textarea" rows="6" placeholder="Opis zadania" value={text} onChange={this.onTextChange} disabled={!isEditable} ></ textarea>
        </label>
        <button className="btn btn--add" disabled={!isEditable} >Edytuj</button>
      </form>
    );
  }
}

export default FormNewTask;