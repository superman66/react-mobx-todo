import { observable, computed, reaction } from 'mobx';
import TodoModel from '../models/TodoModel';
import * as utils from '../utils'

export default class TodoStore {
  @observable todos = [];

  @computed get activeTodoCount() {
    return this.todos.reduce((sum, todo) =>
      sum + (todo.completed ? 0 : 1)
    )
  }

  @computed get completedCount() {
    return this.todos.length - this.activeTodoCount;
  }

  addTodo(title) {
    this.todos.push(new TodoModel(this, utils.uuid(), title, false));
  }

  toggleAll(checked) {
    this.todos.forEach((todo) => {
      todo.completed = checked;
    })
  }

  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed)
  }

  toJS() {
    return this.todos.map(todo => todo.toJS())
  }

  static fromJS(array) {
    const todoStore = new TodoStore();
    todoStore.todos = array.map(item => TodoModel.fromJS(todoStore, item));
    return todoStore;
  }

}
