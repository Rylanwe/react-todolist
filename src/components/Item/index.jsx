import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {

  state = {mouse: false};

  handleMouse = (flag) => {
    return () => {
      this.setState({mouse: flag});
    }
  }

  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    }
  }

  handleDelete = (id) => {
    // 注意要使用 window 调用 confirm
    if (window.confirm('确定删除吗？')) {
      this.props.deleteTodo(id);
    }
  }

  render() {
    const {id, name, done} = this.props;
    const { mouse } = this.state;
    return (
      <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          {/* defaultChecked 表示默认选择，使用 checked 会写死 */}
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
