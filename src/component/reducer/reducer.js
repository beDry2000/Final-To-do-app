import { SET_JOB, ADD_JOB, DEL_JOB, FIL_JOB, CHECK_JOB, FETCH_JOB } from "./constants";


const reducer = (state, action) => {

    const { todos } = state;
    switch (action.type) {
        case FETCH_JOB: 
            return {
                ...state,
                todos: action.payload
            }
        case SET_JOB:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_JOB:
            const newJob = {
                id: todos.length + 1,
                name: action.payload,
                completed: false, removed: false
            }
            todos.push(newJob);
            return state;
        case DEL_JOB:
            const deletedTodos = todos.map(todo => {
                if (todo.id === action.payload) {
                    todo.removed = true;
                }
                return todo;
            })
            return {
                ...state,
                todos: deletedTodos
            };
        case CHECK_JOB:
            const checkedTodos = todos.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = true;
                }
                return todo;
            })
            const checkedTodo = todos.find(todo => todo.id === action.payload)
            return {
                ...state,
                todos: checkedTodos,
                checkedTodo
            };
        case FIL_JOB:
            return {
                ...state,
                filtered: action.payload
            }
        default:
            throw new Error('Invalid action');
    }
}




export default reducer;
