import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'todomvc-app-css/index.css'
import Todo from './component/Todo';
import TodoListView from './component/TodoListView.js'
import todoListStore from './store/store.js'

ReactDOM.render(
  <TodoListView todoList={todoListStore} />,
  document.getElementById('root')
);
