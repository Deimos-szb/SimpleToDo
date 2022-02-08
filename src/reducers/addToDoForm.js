import { CHANGE_TEXT } from '../actions';

export const addToDoForm = function(state = {}, action){
    // let newState;
    switch (action.type) {

        case CHANGE_TEXT:
            return {
                text: action.text
            }
        
        default:
          return state
      }
}