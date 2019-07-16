import React, { Component } from 'react'
import '../todo.css'

export class ToDoItem extends Component <{id: number, text: string, completed: boolean}>{ 
    render() {
        return (
            <div className="todo-item"> 
                <input type="checkbox" checked={this.props.completed}/>
                <p>{this.props.text}</p>
            </div>
        )
    }
} 

export default ToDoItem
