import { createContext, useReducer, useState } from "react";
import reducer from "../component/reducer/reducer";
// Selected list context
// const SelectContext = createContext();

// // Selected list provider
// const SelectProvider = ({ children }) => {

//     const [selected, setSelected] = useState('In Progress');
//     const handleSelect = (listChosen) => { setSelected(listChosen)}
//     const value = { 
//         selected, 
//         handleSelect
//      };

//     return (
//         <SelectContext.Provider value={value}>
//             {children}
//         </SelectContext.Provider>
//     )

// }


const loadContext = createContext();

const LoadProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const handleLoad = () => {
        setLoading(false);

    }
    const value = {loading, handleLoad}
    return (
        <loadContext.Provider value={value}>
            {children}
        </loadContext.Provider>
    )
}
export {loadContext, LoadProvider}

// ALL TASKS CONTEXT
const ListContext = createContext();

// ALL TASKS CONTEXT PROVIDER 
function ListProvider({ children }) {

    const initState = {
        todos: [],
        todoInput: '',
        checkedTodo: '',
        filtered: ''
    }

    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <ListContext.Provider value={[state, dispatch]}>
            {children}
        </ListContext.Provider>
    )
}

export default ListProvider;
export { ListContext }