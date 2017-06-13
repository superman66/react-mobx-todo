import React, { Component } from 'react';

class TodoView extends Component {
  render() {
    const { todo } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.finished}
          onClick={ () => todo.finished = !todo.finished}
        />
        {todo.title}
      </li>
    );
  }
}

export default TodoView;
