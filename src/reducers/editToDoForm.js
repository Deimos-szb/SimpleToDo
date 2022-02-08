import { SHOW_EDIT, EDIT, HIDE_EDIT, ACCEPT_EDIT} from "../actions";

export const editToDoForm = function(state={}, action) {
    switch (action.type) {
        case SHOW_EDIT:            
            return {
                new_text: action.text,
                isVisible: action.isVisible,
                old_text: action.text
            }
        case EDIT:
            return {
                isVisible: true,
                new_text: action.text,
                old_text: state.old_text
            }
        case HIDE_EDIT:
            return {                
                isVisible: action.isVisible,                
            }
        case ACCEPT_EDIT:
            return {
                isVisible: false,
            }
        
        
        default:
          return state
    }
}