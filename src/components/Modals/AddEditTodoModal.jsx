import React, {useContext, useEffect} from 'react';
import {Button, DatePicker, Form, Input, Modal, Select} from "antd";
import TextArea from "antd/es/input/TextArea.js";
import {users} from "../../utils/users.js";
import {todoContext} from "../../Context/GlobalContext.jsx";
import {toast} from "react-toastify";
import {v4 as uuid} from "uuid";
import dayjs from "dayjs";

function AddEditTodoModal({openModal, setOpenModal, status, edit, task}) {
    const [addTodoForm] = Form.useForm()
    const {addTodo, updateTodo} = useContext(todoContext)
    const handleCancel = () => {
        setOpenModal(false)
    }
    const onFinish = (values) => {
        values.due_date = values.due_date.format('YYYY-MM-DD')

        if (edit) {
            values.id = task.id
            values.status = task?.status
            updateTodo(values)
            toast.success('Todo edited successfully')
        } else {
            values.id = uuid()
            values.status = status
            addTodo(values)
            toast.success('Todo created successfully')
        }

        addTodoForm.resetFields()
        setOpenModal(false)
    }

    useEffect(() => {
        addTodoForm.setFieldsValue({
            title: task?.title,
            description: task?.description,
            due_date: edit ? dayjs(task?.due_date) : null,
            assigned_to: task?.assigned_to
        });
    }, [openModal])
    return (
        <Modal
            title={edit ? `${task?.title} Edit Todo` : `Add Todo`}
            open={openModal}
            destroyOnClose={true}
            footer={null}
            onCancel={handleCancel}
        >
            <Form
                layout={"vertical"}
                onFinish={onFinish}
                scrollToFirstError={true}
                autoComplete={"off"}
                form={addTodoForm}
                preserve={false}
                initialValues={edit &&
                    {...task, due_date: dayjs(task?.due_date)}
                }
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
                    preserve={false}
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
                    rules={[
                        {
                            required: true,
                            message: "Please select a person!"
                        }
                    ]}
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
                        {edit ? "Update " : "Add New "} Todo
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default AddEditTodoModal;