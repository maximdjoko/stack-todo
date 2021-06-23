import React, { Component } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default class TaskItem extends Component {
  toggleTask = () => {
    this.props.toggleTask(this.props.id);
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
          <span onClick={this.deleteTask} className="delete">
            <FaTrashAlt color="red" />
          </span>
        </td>
      </tr>
    );
  }
}
