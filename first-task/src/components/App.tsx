import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import '../App.css';
import '../todo.css'
import todosData from '../data/todosData';

class App extends Component<any, any>{

  constructor(props: any) {
    super(props)
    this.state = {
      todos: todosData
    }

    this.handleChanged = this.handleChanged.bind(this);
  }

  private handleChanged(id: number) {

    this.setState((prevState: { todos: { map: (arg0: (todo: any) => any) => void; }; }) => {
      let updatedTodos = prevState.todos.map(todo => {

        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      });

      return {
        todos: updatedTodos
      }
    })

  }

  private mapItems(): any[] {
    return this.state.todos.map((item: { id: number; text: string; completed: boolean; }) => <ToDoItem id={item.id} text={item.text} completed={item.completed} handeChanged={this.handleChanged} />);
  }


  render() {
    return <div className="todo-list ">

      {this.mapItems()}

    </div>
  }

}

export default App;
