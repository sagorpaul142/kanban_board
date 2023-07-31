import {createContext, useState} from "react";
import {DONE, IN_PROGRESS, TO_DO} from "../utils/helper.js";

export const todoContext = createContext()

const initialData = {
    "todo": {
        name: TO_DO,
        items: [],
        color: 'rgb(211, 211, 211)'
    },
    "progress": {
        name: IN_PROGRESS,
        items: [],
        color: 'rgb(255, 120, 0)'
    },
    "done": {
        name: DONE,
        items: [],
        color: 'rgb(107, 201, 80)'
    }
}

function GlobalContext({children}) {
    const [todo, setTodo] = useState(initialData)
    return (
        <todoContext.Provider value={{todo, setTodo}}>
            {children}
        </todoContext.Provider>
    );
}

export default GlobalContext;