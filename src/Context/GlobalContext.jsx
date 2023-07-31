import {createContext, useState} from "react";
import {DONE, IN_PROGRESS, TO_DO} from "../utils/helper.js";
import {v4 as uuid} from "uuid";

export const todoContext = createContext()

const initialData = {
    "todo": {
        name: TO_DO,
        items: [
            {
                id: uuid(),
                title: 'What is Lorem Ipsum?',
                status: 'todo',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                due_date: "2023-07-29",
                assigned_to: 'clementine_bauch'
            },
        ],
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
    const [todos, setTodos] = useState(initialData)
    const addTodo = (values) => {
        const status = values.status
        setTodos((prevState) => ({
            ...prevState,
            [status]: {
                ...prevState[status],
                items: [...prevState[status]?.items, values],
            },
        }));
    }
    const updateTodo = (updatedTodo) => {
        const {id, status} = updatedTodo
        setTodos((prevState) => ({
            ...prevState,
            [status]: {
                ...prevState[status],
                items: [...prevState[status].items].map((task) => task.id === id ? updatedTodo : task),
            },
        }));
    }
    return (
        <todoContext.Provider value={{todos, setTodos, addTodo, updateTodo}}>
            {children}
        </todoContext.Provider>
    );
}

export default GlobalContext;