import React from 'react';
import {addNewToDo} from '../actionCreators';
// import store from '../store';


class AddToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }
    
    submitHandler(ev){
        ev.preventDefault();
        // console.log(this.props.addToDoForm.text);
        if (this.props.addToDoForm.text != '') {
            this.props.addNewToDo(this.props.addToDoForm.text);
        }

    }

    changeHandler(ev) {
        ev.preventDefault();
        this.props.changeText(ev.target.value)
    }


    render() {
        return <form className='AddToDoForm' onSubmit={this.submitHandler}>
            <input name='text' placeholder='Что сделать?' onChange={this.changeHandler} value={this.props.text} autoComplete="off" maxLength="80" size="85"></input>
            <input type="submit" value="Добавить" />
        </form>
    }
}

export default AddToDoForm;