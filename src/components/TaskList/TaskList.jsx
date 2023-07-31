import Task from "../Task/Task.jsx";
import "./static/TaskList.css"
import {Draggable, Droppable} from "react-beautiful-dnd";
import NoData from "../NoData/NoData.jsx";

function TaskList({columnId, column}) {
    return (
        <Droppable droppableId={columnId}>
            {(provided, snapshot) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={column.items.length === 0 ? " div_center mt-4 task_list_column" : 'mt-4 task_list_column'}
                >
                    {
                        column.items.length === 0 ?
                            <NoData status={columnId}/>
                            :
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
                                                    // backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
                                                    ...provided.draggableProps.style
                                                }}
                                                className={"single_task"}
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