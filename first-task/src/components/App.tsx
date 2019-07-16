import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import '../App.css';
import '../todo.css'
import todosData from '../data/todosData';

export class App extends Component {


  private mapItems(): any[] {
    return todosData.map(item => <ToDoItem id={item.id} text={item.text} completed={item.completed} />);
  }


  render() {
    return <div className="todo-list ">

      {this.mapItems()}

    </div>
  }

}

export default App;
