import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {

  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  }

  handleClearAllDone = () => {
    if (window.confirm('确认全部删除')) {
      this.props.clearAllDone();
    }
  }

  render() {
    const { todos } = this.props;
    const doneCount = todos.reduce((prev, current) => {
      return prev + (current.done ? 1 : 0);
    }, 0);
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          {/* defaultChecked 默认控制第一次 */}
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0} />
        </label>
        <span>
          <span>已完成 {doneCount}</span> / 全部 {total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
