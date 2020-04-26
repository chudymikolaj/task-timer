import React from 'react';

export default function FormNewTask(props) {
  const { 
    onTitleChange,
    onTimeChange,
    onTextChange,
    onAddTask
  } = props;

  return (
    <div className={`TaskEditor`}>
      <div className="TaskEditor__block--flexBorder">
        <h2 className="TaskEditor__title">Nowe zadanie</h2>
        <button className="btn btn--options">---</button>
      </div>
      <label className="TaskEditor__label">
        <span className="TaskEditor__label__name">Co robisz:</span>
        <input className="TaskEditor__label__input" type="text" placeholder="Nazwa zadania" onChange={onTitleChange} />
      </label>
      <label className="TaskEditor__label">
        <span className="TaskEditor__label__name">Przez ile czasu:</span>
        <input className="TaskEditor__label__input" type="number" placeholder="Czas trwania zadania" onChange={onTimeChange} />
      </label>
      <label className="TaskEditor__label">
        <span className="TaskEditor__label__name">Zadania:</span>
        <textarea className="TaskEditor__textarea" rows="6" placeholder="Opis zadania" onChange={onTextChange} ></ textarea>
      </label>         
      <button className="btn btn--add" onClick={onAddTask} >Dodaj zadanie</button>
    </div>
  );
}