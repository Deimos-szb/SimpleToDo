import { connect } from "react-redux";
import addToDoForm from "../components/addToDoForm";
import {addNewToDo, changeText} from '../actionCreators';

function mapStateToProps(state){
    const {toDoList, addToDoForm} = state;
    return {toDoList, addToDoForm};
}
function mapDispatchToProps(dispatch){
    return {
        addNewToDo: (text) => dispatch(addNewToDo(text)),
        changeText: (text) => dispatch(changeText(text))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(addToDoForm);