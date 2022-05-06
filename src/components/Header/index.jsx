import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './index.css';

export default class Header extends Component {

  // 限制类型
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleKeyUp = (event) => {
    const { keyCode, target } = event;

    // 按键为 Enter
    if (keyCode !== 13) return;

    // 添加的名字不能为空
    if (target.value.trim() === '') {
      alert('输入不能为空');
      return;
    }
    
    // 创建新的 item
    const item = {id: nanoid(), name: target.value, done: false};
    this.props.addTodo(item);

    // 清空 input
    target.value = '';
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
