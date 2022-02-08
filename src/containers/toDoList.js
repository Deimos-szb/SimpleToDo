import { connect } from "react-redux";
import toDoList from "../components/toDoList";
import {deleteToDo} from '../actionCreators';

function mapStateToProps(state){
    const {toDoList} = state;
    return {toDoList};
}
function mapDispatchToProps(dispatch){
    return {
        deleteToDo: (text) => dispatch(deleteToDo(text))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(toDoList);