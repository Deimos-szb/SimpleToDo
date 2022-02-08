import React from 'react';

class ToDoCard extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     isDone: this.props.isDone,
        // }
        this.doneHandler = this.doneHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.editHandler = this.editHandler.bind(this);
    }

    doneHandler(){
        this.props.isDoneHandler(this.props.text)
    }

    deleteHandler(){
        // console.log(this.props.text);
        this.props.deleteToDo(this.props.text);
    }

    editHandler(){
        this.props.showEdit(true, this.props.text)
    }

    render(){        
        return <div className="toDoCard" className={this.props.isDone ? "toDoCardDone" : "toDoCardNotDone"}>
            <h3>Сделать:</h3>
            <p>{this.props.text}</p>
            <button onClick={this.editHandler}>Редактировать</button>
            <button onClick={this.deleteHandler}>Удалить</button>
            <button onClick={this.doneHandler}>Пометить сделано</button>
            </div>
    }
}

export default ToDoCard;