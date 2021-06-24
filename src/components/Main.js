import React, { Component } from 'react';
import CreateTask from './CreateTask';
import TaskList from './TaskList';

const tasks = localStorage.getItem('tasks')
  ? JSON.parse(localStorage.getItem('tasks'))
  : [];
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: tasks,
      isError: false,
    };
  }

  createTask = (task, description) => {
    if (task.trim() === '') {
      this.setState({ isError: true });
      return;
    } else {
      this.setState({ isError: false });
    }
    if (description.trim() === '') {
    }
    tasks.unshift({ task, description });
    this.setState({ tasks: tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  toggleTask = (taskId) => {
    const taskItem = tasks[taskId];
    taskItem.isCompleted = !taskItem.isCompleted;
    this.setState({ tasks: tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  deleteTask = (taskId) => {
    tasks.splice(taskId, 1);
    this.setState({ tasks: tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  render() {
    return (
      <div className="main">
        <div className={this.state.isError ? 'error' : 'hide'}>
          At list a todo title is required
        </div>
        <h1 className="head">
          <span>Stack</span>D
        </h1>
        <div className="stackTodos">
          <div className="addItems">
            <h1>Add Todos</h1>
            <CreateTask createTask={this.createTask} />
          </div>
          <div className="todos">
            <h1>Todos</h1>
            <TaskList
              tasks={this.state.tasks}
              deleteTask={this.deleteTask}
              toggleTask={this.toggleTask}
            />
          </div>
        </div>
      </div>
    );
  }
}
