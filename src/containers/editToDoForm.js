import { connect } from "react-redux";
import editToDoForm from "../components/editToDoForm";
import {showEdit, edit, hideEdit, acceptEdit, addNewToDo, deleteToDo} from '../actionCreators';

function mapStateToProps(state){
    const {toDoList, editToDoForm} = state;
    return {toDoList, editToDoForm};
}
function mapDispatchToProps(dispatch){
    return {
        showEdit: (isVisible, text) => dispatch(showEdit(isVisible, text)),   
        edit: (text) => dispatch(edit(text)),
        hideEdit: () => dispatch(hideEdit()),
        acceptEdit: (isVisible, text) => dispatch(acceptEdit(isVisible, text)),
        addNewToDo: (text) => dispatch(addNewToDo(text)),
        deleteToDo: (text) => dispatch(deleteToDo(text)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(editToDoForm);