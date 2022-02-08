import {createStore, combineReducers} from 'redux';
import initialState from './initialState';
import { toDoList } from './reducers/toDoList';
import { addToDoForm } from './reducers/addToDoForm';
import { editToDoForm } from './reducers/editToDoForm';

const store = createStore(combineReducers({toDoList, addToDoForm, editToDoForm}), initialState);

store.subscribe(() => {
  localStorage.setItem("toDoList", JSON.stringify(store.getState().toDoList))
  });

export default store;