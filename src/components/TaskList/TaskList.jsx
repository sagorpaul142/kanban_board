import React from 'react';
import Task from "../Task/Task.jsx";
import "./static/TaskList.css"
import {Draggable, Droppable} from "react-beautiful-dnd";

function TaskList({columnId, column}) {
    return (
        <Droppable droppableId={columnId}>
            {(provided, snapshot) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="mt-4 task_list_column"
                >
                    {
                        column.items.map((item, index) => (
                            <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                            >
                                {
                                    (provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                                backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
                                                ...provided.draggableProps.style
                                            }}
                                        >
                                            <Task task={item}/>
                                        </div>

                                    )}

                            </Draggable>
                        ))
                    }
                </div>
            )
            }
        </Droppable>

    );
}

export default TaskList;

//                                     <div className="mt-4 task_list_column">
//     <Task />
// </div>