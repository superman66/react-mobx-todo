import React, { Component } from 'react';
import TodoView from './TodoView';
import { observer } from 'mobx-react'

@observer
class TodoListView extends Component {
  render() {
    const { todoStore } = this.props;
    console.log(todoStore.todos.toJS());
    if (todoStore.todos.length === 0) {
      return null;
    }
    return (
      <div>
        <ul>
          {todoStore.todos.toJS().map(todo => <TodoView todo={todo} key={todo.id} />)}
        </ul>
        Task left: {todoStore.activeTodoCount}
      </div>
    );
  }
}

export default TodoListView;
