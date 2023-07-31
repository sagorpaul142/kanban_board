import React from 'react';
import Task from "../Task/Task.jsx";
import "./static/TaskList.css"

function TaskList() {
    return (
        <div className="mt-4 task_list_column">
            <Task />
            <Task />
            <Task />
        </div>
    );
}

export default TaskList;