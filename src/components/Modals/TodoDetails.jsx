import React from 'react';
import {List, Modal} from "antd";
import moment from "../../utils/moment.js";
import {users} from "../../utils/users.js";

function TodoDetails({task, openModal, setOpenModal}) {
    const handleCancel = () => {
        setOpenModal(false)
    }
    return (
        <Modal
            title={`${task?.title} Todo Detail`}
            open={openModal}
            destroyOnClose={true}
            footer={null}
            onCancel={handleCancel}
        >
            <List className={"single_list"}>
                <List.Item>
                    <div className={'list_full_side'}>
                        <div className={'list_title'}>Todo Title</div>
                        <div className='text_capitalize list_text'>{task.title}</div>
                    </div>
                </List.Item>
                <List.Item>
                    <div className={'list_full_side'}>
                        <div className={'list_title'}>Todo Description</div>
                        <div className='text_capitalize list_text'>{task.description}</div>
                    </div>
                </List.Item>
                <List.Item>
                    <div className={'list_full_side'}>
                        <div className={'list_title'}>Due Date</div>
                        <div className='text_capitalize list_text'>
                            {moment(task?.due_date).format("MMM Do YY")}
                        </div>
                    </div>
                </List.Item>
                <List.Item>
                    <div className={'list_full_side'}>
                        <div className={'list_title'}>Assigned To</div>
                        <div className='text_capitalize list_text'>
                                {
                                    users.map((user) => (
                                        user.value === task?.assigned_to ? user.label : null
                                    ))
                                }
                        </div>
                    </div>
                </List.Item>
            </List>


        </Modal>
    );
}

export default TodoDetails;