import React, { Component } from 'react';

export default class CreateTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      task: '',
      empty: false,
      description: '',
      isCompleted: false,
    };
  }

  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };
  handleDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTask(this.state.task, this.state.description);
    this.setState({ task: '', description: '' });
    this.setState({ count: this.state.count + 1 });
    // this.setState({ description: '' });
  };

  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter Task"
            value={this.state.task}
            onChange={this.handleChange}
            autoFocus
          />
          <br />
          <input
            type="text"
            placeholder="Enter Description"
            value={this.state.description}
            onChange={this.handleDescription}
            autoFocus
          />
          <br />
          <button
            type="submit"
            className="add"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            add todo
          </button>
        </form>
      </div>
    );
  }
}
