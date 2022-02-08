import { ADD_NEW_TO_DO, CHANGE_TEXT, DELETE_TO_DO, SHOW_EDIT, EDIT, HIDE_EDIT, ACCEPT_EDIT, IS_DONE } from "./actions";

export const addNewToDo = (text) => (
    {type: ADD_NEW_TO_DO, text}
    );

export const deleteToDo = (text) => (
    {type: DELETE_TO_DO, text}
    );

export const changeText = (text) => (
    {type: CHANGE_TEXT, text}
    );

export const showEdit = (isVisible, text) => (
    {type: SHOW_EDIT, isVisible, text}
)

export const edit = (text) => (
    {type: EDIT, text}
)

export const hideEdit = () => (
    {type: HIDE_EDIT, }
)

export const acceptEdit = (isVisible, text) => (
    {type: ACCEPT_EDIT, isVisible, text}
)

export const isDone = (text) => (
    {type: IS_DONE, text}
)