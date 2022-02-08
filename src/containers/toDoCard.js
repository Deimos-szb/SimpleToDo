import { connect } from "react-redux";
import toDoCard from "../components/toDoCard";
import {deleteToDo} from '../actionCreators';
import {showEdit} from '../actionCreators';
import {isDone} from '../actionCreators';

function mapStateToProps(state){
    const toDoList = state;
    return {...toDoList};
}
function mapDispatchToProps(dispatch){
    return {
        deleteToDo: (text) => dispatch(deleteToDo(text)),
        showEdit: (isVisible, text) => dispatch(showEdit(isVisible, text)),
        isDoneHandler: (text) => dispatch(isDone(text)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(toDoCard);