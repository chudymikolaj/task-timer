import React, { Component } from 'react';

import FormNewTask from './FormNewTask';
import TaskList from './TaskList';
import TaskTimer from './TaskTimer';

export default class TasksTable extends Component {
  constructor() {
    super();

    this.state = {
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
    const { tasks } = this.state;

    return (
      <React.Fragment>
        <FormNewTask task={this.handleNewTask} />
        <TaskList tasks={tasks} removeTask={this.removeTask} />
        <TaskTimer />
      </React.Fragment>
    )
  }

  handleNewTask = (tasks) => {
    this.setState({
      tasks: [ ...this.state.tasks, tasks]
    })
  }


  removeTask = (index) => {
    const tasks = this.state.tasks.filter((tasks) => {
      return tasks.uuid !== index
    });

    this.setState({tasks})
  }
}
