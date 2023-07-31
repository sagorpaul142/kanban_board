import {useContext} from 'react';
import Header from "../Header/Header.jsx";
import "./static/KanbanBoard.css"
import TaskList from "../TaskList/TaskList.jsx";
import {DragDropContext} from "react-beautiful-dnd";
import {todoContext} from "../../Context/GlobalContext.jsx";
import {DONE, IN_PROGRESS, TO_DO} from "../../utils/helper.js";

function KanbanBoard() {
    const {todos, setTodos} = useContext(todoContext)
    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const {source, destination} = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);

            if (destColumn.name === IN_PROGRESS) {
                removed.status = IN_PROGRESS
            } else if (destColumn.name === TO_DO) {
                removed.status = TO_DO
            } else if (destColumn.name === DONE) {
                removed.status = DONE
            }
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            });
        } else {
            const column = todos[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setTodos({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            });
        }
    }

    return (
        <div>
            <div className="kanban_column">
                <DragDropContext
                    onDragEnd={result => onDragEnd(result, todos, setTodos)}
                >
                    {
                        Object.entries(todos).map(([columnId, column], index) => {
                            return (
                                <div key={index} className={"all_column"}>
                                    <Header
                                        title={column.name}
                                        color={column.color}
                                        numberOfTodo={column?.items?.length}
                                        status={column.name === TO_DO ? 'todo' : column.name === IN_PROGRESS ? "progress" : 'done'}
                                    />
                                    <TaskList columnId={columnId} column={column}/>
                                </div>
                            )
                        })
                    }

                </DragDropContext>
            </div>
        </div>
    );
}

export default KanbanBoard;