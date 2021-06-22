import React, { Component } from 'react';

export default class TaskItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  toggleTask = () => {
    this.props.toggleTask(this.props.id);
  };
  handleCount = () => {
    this.setState({ count: this.state.count + 1 });
    this.handleCount = this.handleCount.bind(this);
  };
  deleteTask = () => {
    this.props.deleteTask(this.props.id);
  };

  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td onClick={this.toggleTask}>{this.props.taskItem.task}</td>
        <td onClick={this.toggleTask}>{this.props.taskItem.description}</td>
        <td>
          <button
            onClick={this.toggleTask}
            className={
              this.props.taskItem.isCompleted ? 'hide' : 'not-completed'
            }
          >
            not-done
          </button>
          <button
            onClick={this.toggleTask}
            className={this.props.taskItem.isCompleted ? 'completed' : 'hide'}
          >
            done
          </button>
        </td>
        <td>
          <input
            type="checkbox"
            onClick={this.toggleTask}
            readOnly
            checked={this.props.taskItem.isCompleted}
          />
          <button onClick={this.deleteTask} className="delete">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
