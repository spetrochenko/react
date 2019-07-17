import React, { Component } from 'react'
import '../todo.css'

export class ToDoItem extends Component<{ id: number, text: string, completed: boolean, handeChanged: any }>{

    private completedStyle(): any {
        return {
            fontStyle: 'italic',
            color: "#cdcdcd",
            textDecoration: "line-through"
        }
    }

    render() {
        return (
            <div className="todo-item">
                <input type="checkbox"
                    checked={this.props.completed}
                    onChange={(event) => this.props.handeChanged(this.props.id)}
                />
                <p style={this.props.completed ? this.completedStyle(): null}>{this.props.text}</p>
            </div>
        )
    }
}

export default ToDoItem
