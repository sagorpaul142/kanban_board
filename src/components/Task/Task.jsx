import {Space} from "antd";
import {MdDelete, MdModeEditOutline, MdRemoveRedEye} from "react-icons/md";
import "./static/Task.css"
import {users} from "../../utils/users.js";
import moment from "../../utils/moment.js";

function Task({task}) {
    return (
        <div className={'cursor-grab task_section'}>
            <div className="task_title">{task?.title}</div>
            <div className="task_description">{task?.description}</div>
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
                <MdRemoveRedEye size={18} className={'cursor-pointer'}/>
                <MdModeEditOutline size={18} className={'cursor-pointer'}/>
                <MdDelete size={18} color={'red'} className={'cursor-pointer'}/>
            </Space>
        </div>
    );
}

export default Task;