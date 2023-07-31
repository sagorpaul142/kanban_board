import {Space} from "antd";
import {MdDelete, MdModeEditOutline, MdRemoveRedEye} from "react-icons/md";
import "./static/Task.css"

function Task({}) {
    return (
        <div className={'cursor-grab task_section'}>
            <div className="task_title">title</div>
            <div className="task_description">description</div>
            <div className="assign_to">Assigned To <strong>Sagor</strong></div>
            <div className="due_date">Due Date</div>
            <Space className="w-100 justify-end">
                <MdRemoveRedEye size={18} className={'cursor-pointer'}/>
                <MdModeEditOutline size={18} className={'cursor-pointer'}/>
                <MdDelete size={18} color={'red'} className={'cursor-pointer'}/>
            </Space>
        </div>
    );
}

export default Task;