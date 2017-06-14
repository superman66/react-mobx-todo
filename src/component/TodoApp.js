import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TodoListView from './TodoListView';

@observer
export default class TodoApp extends Component {
  render() {
    const { todoStore, viewStore } = this.props;
    return (
      <div>
        <TodoListView
          todoStore={todoStore}
          viewStore={viewStore}
        />
      </div>
    );
  }
}
