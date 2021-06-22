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
    };
  }

  createTask = (task, description) => {
    if (task.trim() === '') {
      alert("Task can't be empty");
      return;
    }
    if (description.trim() === '') {
      alert("description can't be empty");
      return;
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
        <h1 className="head">Stack Todos</h1>
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
