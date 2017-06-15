import React from 'react';
import ReactDOM from 'react-dom';
import 'todomvc-app-css/index.css'
import TodoApp from './component/TodoApp';
import TodoStore from './stores/TodoStore.js'
import ViewStore from './stores/ViewStore.js'

const todoStore = TodoStore.fromJS([]);
const viewStore = new ViewStore();

todoStore.addTodo('test1');
todoStore.addTodo('test2');

ReactDOM.render(
  <TodoApp todoStore={todoStore} viewStore={viewStore} />,
  document.getElementById('root')
);
