import React from 'react';
import './App.css';
import ToDoList from './containers/toDoList';
import AddToDoForm from './containers/addToDoForm';
import EditToDoForm from './containers/editToDoForm';


class App extends React.Component {
  render() {
    return <>
    <AddToDoForm />
    <ToDoList />
    <EditToDoForm />
  </>
  }
}


export default App;

// firstToDo={initialState["toDoList"]}