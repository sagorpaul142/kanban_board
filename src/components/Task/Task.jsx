import {Space} from "antd";
import {MdDelete, MdModeEditOutline, MdRemoveRedEye} from "react-icons/md";
import "./static/Task.css"
import {users} from "../../utils/users.js";
import moment from "../../utils/moment.js";
import {useContext, useState} from "react";
import AddEditTodoModal from "../Modals/AddEditTodoModal.jsx";
import {todoContext} from "../../Context/GlobalContext.jsx";
import TodoDetails from "../Modals/TodoDetails.jsx";

function Task({task}) {
    const [openModal, setOpenModal] = useState(false)
    const [open, setOpen] = useState(false)
    const {deleteTodo} = useContext(todoContext)
    return (
        <div className={'cursor-grab task_section'}>
            <div className="task_title">{task?.title}</div>
            <div className="task_description">
                {task?.description?.length > 22 ? task?.description?.slice(0, 22) + ' ...' : task?.description}
            </div>
            <div className="assign_to">
                Assigned To
                <strong className="ml-2">
                    {
                        users.map((user) => (
                            user.value === task?.assigned_to ? user.label : null
                        ))
                    }
                </strong>
            </div>
            <div className="due_date">
                Due Date
                <span className="ml-2">
                    {
                        moment(task?.due_date).format("MMM Do YY")
                    }
                </span>
            </div>
            <Space className="w-100 justify-end">
                <MdRemoveRedEye
                    size={18}
                    className={'cursor-pointer'}
                    onClick={() => setOpen(true)}
                />
                <MdModeEditOutline
                    size={18}
                    className={'cursor-pointer'}
                    onClick={() => setOpenModal(true)}
                />
                <MdDelete
                    size={18}
                    color={'red'}
                    className={'cursor-pointer'}
                    onClick={() => {
                        deleteTodo(task?.id, task?.status, task?.title)
                    }}
                />
            </Space>
            <AddEditTodoModal openModal={openModal} setOpenModal={setOpenModal} edit task={task}/>
            <TodoDetails openModal={open} setOpenModal={setOpen} task={task} />
        </div>
    );
}

export default Task;