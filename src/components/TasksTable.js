import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AddTask from './AddTask';
import EditorTask from './EditorTask';
import TaskList from './TaskList';
import TaskTimer from './TaskTimer';

export default class TasksTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Nauka React.js',
      time: '2',
      text: 'Od zera do bohatera!!!',
      isEditable: true,
      tasks: [
        {
          'uuid': 'asdas',
          'title': 'Tytuł 1',
          'text': 'lorem',
          'time': '1h'
        }
      ]
    }
  }

  render() {
    const { title, time, text, tasks, isEditable } = this.state;

    return (
      <React.Fragment>
        <AddTask 
          onTitleChange={this.handleTitle}
          onTimeChange={this.handleTime}
          onTextChange={this.handleText}
          onAddTask={this.handleSubmit}
        />

        <ul className="TaskList">
          {tasks.map( task => (
            <TaskList 
              key={task.uuid}
              title={task.title} 
              text={task.text}
              time={task.time}
              onStart={null}
              onUpdate={(e) => { this.updateTask(task.uuid, { ...tasks, uuid: uuidv4(), title: 'Zmieniono', text: "Nauka aktualizowania listy w react.js", time: "120"}) }} 
              onRemove={(e) => { this.removeTask(task.uuid) }} 
            />
          ))}
        </ul>

        
        {false ?  
          <>
            <EditorTask 
              title={title} 
              time={time}
              text={text}
              isEditable= {isEditable}
              onTitleChange={this.handleTitle}
              onTimeChange={this.handleTime}
              onTextChange={this.handleText}
              onAddChange={this.handleConfirm}
            />
            <TaskTimer 
              title={title} 
              time={time}
              isEditable={isEditable}
              onEdit={this.handleEdit}
            />
          </>
        : null} 
        
      </React.Fragment>
    )
  }

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  }

  handleTime = (e) => {
    this.setState({ time: e.target.value });
  }

  handleText = (e) => {
    this.setState({ text: e.target.value });
  }
 
  handleConfirm = () => {
    this.setState({ isEditable: false })
  }

  handleEdit = () => {
    this.setState({ isEditable: true })
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

    this.setState( prevState => {
      const tasks = [ ...prevState.tasks, newTask]
      return { tasks };
    })
  }

  updateTask = (indexToUpdate, updatedTask) => {
    this.setState( prevState => {
      const tasks = prevState.tasks.map( task => task.uuid === indexToUpdate ? updatedTask : task)

      return { tasks };
    })
  }

  removeTask = (indexToRemove) => {
    this.setState( prevState => {
      const tasks = prevState.tasks.filter((task) => task.uuid !== indexToRemove);
      
      return { tasks };
    });
  }

}
