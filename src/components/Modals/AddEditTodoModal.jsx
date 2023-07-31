import React from 'react';
import {Button, DatePicker, Form, Input, Modal, Select} from "antd";
import TextArea from "antd/es/input/TextArea.js";
import {users} from "../../utils/users.js";

function AddEditTodoModal({openModal, setOpenModal}) {
    const handleCancel = () => {
        setOpenModal(false)
    }
    const onFinish = (values) => {
        console.log(values)
    }
    return (
        <Modal
            title={`Add Todo`}
            open={openModal}
            destroyOnClose={true}

            footer={null}
            onCancel={handleCancel}
        >
            <Form
                name={"AddTodoForm"}
                onFinish={onFinish}
                layout={"vertical"}
                scrollToFirstError={true}
                autoComplete={"off"}
            >
                <Form.Item
                    label={"Title"}
                    name={"title"}
                    rules={[
                        {
                            required: true,
                            message: "Please input a title!"
                        },
                        {
                            min: 3,
                            message: "title should be at least 3 characters long"
                        }
                    ]}
                >
                    <Input placeholder={"Please write a todo title"} showCount maxLength={30}/>

                </Form.Item>

                <Form.Item
                    label={"Description"}
                    name={"description"}
                    rules={[
                        {
                            required: true,
                            message: "Please input a description!"
                        },
                        {
                            min: 8,
                            message: "Description should be at least 8 characters long"
                        }
                    ]}
                >
                    <TextArea rows={3} placeholder={"Please write a description "} showCount maxLength={100}/>
                </Form.Item>

                <Form.Item
                    label={"Due Date"}
                    name={"due_date"}
                    rules={[
                        {
                            required: true,
                            message: "Please select a date!"
                        },
                    ]}
                >
                    <DatePicker style={{width: '100%'}}/>

                </Form.Item>

                <Form.Item
                    label={'Assigned To'}
                    name={'assigned_to'}
                >
                    <Select
                        allowClear
                        options={users}
                        showSearch
                        placeholder={'Please select a user'}
                    />
                </Form.Item>


                <Form.Item>
                    <Button type={"primary"} htmlType={"submit"}>
                        Add Todo
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default AddEditTodoModal;