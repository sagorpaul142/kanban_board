import React from 'react';
import Header from "../Header/Header.jsx";
import "./static/KanbanBoard.css"
import TaskList from "../TaskList/TaskList.jsx";

function KanbanBoard() {
    return (
        <div>
            <div className="kanban_column">
                <Header title={"Todo"} numberOfTodo={0}/>
                <Header title={"Progress"} numberOfTodo={0}/>
                <Header title={"Done"} numberOfTodo={0}/>
            </div>
            <TaskList/>
        </div>
    );
}

export default KanbanBoard;