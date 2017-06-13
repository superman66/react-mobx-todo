import React, { Component } from 'react';
import TodoView from './TodoView';
import {observer} from 'mobx-react'

@observer
class TodoListView extends Component {
  render() {
    return (
      <div>
        <ul>
          {todoList.todos.map( todo => <TodoView todo={todo} key={todo.id}/>)}
        </ul>
        Task left: {todoList.unfinshedTodoCount}
      </div>
    );
  }
}

export default TodoView;
