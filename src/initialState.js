if (!(localStorage.getItem('toDoList'))) {
    localStorage.setItem('toDoList', JSON.stringify([]));
}

const toDoList = JSON.parse(localStorage.getItem('toDoList'));


export default {
    toDoList: toDoList, //[['first todo', 1], ['second todo', 0], ['third todo', 0]],
    addToDoForm: {
        text: "",
    },
    editToDoForm: {
        old_text: "",
        new_text: "",
        isVisible: false,
    }
}