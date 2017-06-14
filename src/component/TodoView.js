import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class TodoView extends Component {
  render() {
    const { todo } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          onClick={ () => todo.completed = !todo.completed}
        />
        3
      </li>
    );
  }
}

export default TodoView;
