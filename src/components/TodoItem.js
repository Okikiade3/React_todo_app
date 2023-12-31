import React, { Component } from 'react'

export default class TodoItem  extends Component {
  render() {
const {title, handleDelete, handleEdit } = this.props;

    return (
      <li className="list-group-item text-capitalize d-flex 
        justify-content-between my-2"
        >
          <h6>{title}</h6>
          <div className="todo-icon">
            <span className="mx-2 btn btn-success"  onClick={handleEdit}>
                <i className="fa fa-pen">Edit</i>
            </span>
            <span className="mx-2 btn btn-danger" onClick={handleDelete}>
                <i className="fa fa-trash">Delete</i>
            </span>
          </div>  
      </li>
    )
  }
}
