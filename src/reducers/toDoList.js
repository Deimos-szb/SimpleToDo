import { ADD_NEW_TO_DO, DELETE_TO_DO, IS_DONE} from '../actions';

export const toDoList = function(state = [], action){
    
    switch (action.type) {

        case ADD_NEW_TO_DO:
          
          return [...state, {text: action.text, isDone: false}]
        
        case DELETE_TO_DO:
          return state.filter( (item) => item.text != action.text)
        
        case IS_DONE:
          let newState = []; // = Object.assign(state);
          for (let item of state) {
            if (item.text == action.text) {
              let new_item = {text: item.text, isDone: !item.isDone}
              newState.push(new_item);
            } else {
              newState.push(item);
            }

          }
          return newState

        default:
          return state
      }
}