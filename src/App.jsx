import React, { Component } from "react";
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';


class App extends Component {

  state = {
    todos: [
      {id: '001', name: '吃饭', done: true},
      {id: '002', name: '睡觉', done: true},
      {id: '003', name: '打代码', done: false},
      {id: '004', name: '逛街', done: false}
    ]
  };

  // 传给子组件，子组件通过调把数据对象传递过来
  addTodo = (item) => {
    const { todos } = this.state;
    const newTodos = [item, ...todos];
    // 更新状态
    this.setState({todos: newTodos});
  }

  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map(item => {
      if (item.id === id) {
        return {...item, done};
      } else {
        return item;
      }
    });
    this.setState({todos: newTodos});
  }

  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    this.setState({todos: newTodos});
  }

  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((item) => {
      return {...item, done};
    })
    this.setState({todos: newTodos});
  }

  clearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((item) => {
      return !item.done;
    });
    this.setState({todos: newTodos});
  } 

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    )
  }
}

export default App;