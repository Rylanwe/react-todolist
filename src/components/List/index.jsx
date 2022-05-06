import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import './index.css';

export default class List extends Component {

  // 限制类型
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    
    return (
      <ul className="todo-main">
        {
          todos.map(item => {
            return <Item key={item.id} {...item} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          })
        }
      </ul>
    )
  }
}
