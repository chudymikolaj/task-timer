import React from 'react';

export default function FormNewTask(props) {
  const { 
    title,
    text,
    time,
    onTitleChange,
    onTimeChange,
    onTextChange,
    onAddChange
  } = props;

  return (
    <div className="TaskEditor">
      <div className="TaskEditor__block--flexBorder">
        <h2 className="TaskEditor__title">Nowe zadanie</h2>
        <button className="btn btn--options">---</button>
      </div>
      <label className="TaskEditor__label">
        <span className="TaskEditor__label__name">Co robisz:</span>
        <input className="TaskEditor__label__input" type="text" placeholder="Nazwa zadania" value={title} onChange={onTitleChange} disabled={false} />
      </label>
      <label className="TaskEditor__label">
        <span className="TaskEditor__label__name">Przez ile czasu:</span>
        <input className="TaskEditor__label__input" type="number" placeholder="Czas trwania zadania" value={time} onChange={onTimeChange} disabled={false} />
      </label>
      <label className="TaskEditor__label">
        <span className="TaskEditor__label__name">Zadania:</span>
        <textarea className="TaskEditor__textarea" rows="6" placeholder="Opis zadania" value={text} onChange={onTextChange} disabled={false} ></ textarea>
      </label>         
      <button className="btn btn--add" onClick={onAddChange} disabled={false} >Dodaj zadanie</button>
    </div>
  );
}