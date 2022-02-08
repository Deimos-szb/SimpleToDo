import React from 'react';
import ToDoCard from '../containers/toDoCard';
// import {firstToDo} from '../initialState';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const toDoList = this.props.toDoList.map( (item, index) => <ToDoCard key={index} text={item.text} isDone={item.isDone}/> );
        return <div className='App'>{toDoList}</div>
    }
}

export default ToDoList