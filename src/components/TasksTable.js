import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import FormNewTask from './FormNewTask';
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
        <FormNewTask 
          title={title} 
          time={time}
          text={text}
          isEditable= {isEditable}
          onTitleChange={this.handleTitle}
          onTimeChange={this.handleTime}
          onTextChange={this.handleText}
          onAddChange={this.handleConfirm}
        />
        <TaskList tasks={tasks} removeTask={this.removeTask} />
        <TaskTimer 
          title={title} 
          time={time}
          isEditable={isEditable}
          onEdit={this.handleEdit}
         />
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

    // this.setState({
    //   title: '', 
    //   text: '',
    //   time: ''
    // })

    this.setState({
      tasks: [ ...this.state.tasks, newTask]
    })
  }

  removeTask = (index) => {
    const tasks = this.state.tasks.filter((tasks) => {
      return tasks.uuid !== index
    });

    this.setState({tasks})
  }

}
