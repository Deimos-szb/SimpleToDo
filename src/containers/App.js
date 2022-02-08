import { connect } from "react-redux";
import App from "../App";
import {addNewToDo} from '../actionCreators';

function mapStateToProps(state){
    const {toDoList} = state;
    return {toDoList};
}
function mapDispatchToProps(dispatch){
    return {
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);