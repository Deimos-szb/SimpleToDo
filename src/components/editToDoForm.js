import React from 'react';

class EditToDoForm extends React.Component {
    constructor(props) {
        super(props)
        this.changeHandler = this.changeHandler.bind(this);
        this.acceptHandler = this.acceptHandler.bind(this);
    }


    changeHandler(ev) {
        ev.preventDefault();
        this.props.edit(ev.target.value)
    }

    acceptHandler(ev) {
        ev.preventDefault();
        if (this.props.editToDoForm.new_text != '') {
            // console.log(this.props.editToDoForm.old_text);
            this.props.deleteToDo(this.props.editToDoForm.old_text);
            this.props.addNewToDo(this.props.editToDoForm.new_text);
            this.props.hideEdit();
        }
        if (this.props.editToDoForm.new_text == '') {
            this.props.deleteToDo(this.props.editToDoForm.old_text);
            this.props.hideEdit();
        }
    }

    render() {
        if (!this.props.editToDoForm.isVisible) return <></>
        return <div className={this.props.editToDoForm.isVisible ? "editForm visible" : "editForm"} onClick={()=> this.props.hideEdit()} >
            <div className='content' onClick={e => e.stopPropagation()}>
                <input type='text' value={this.props.editToDoForm.new_text} onChange={this.changeHandler}/>
                <br/>
                <button onClick={()=> this.props.hideEdit()}>Cancel</button>
                <button onClick={this.acceptHandler}>OK</button>
            </div>
        </div>
    }
}

export default EditToDoForm;

// onClick={()=> this.props.showEdit}