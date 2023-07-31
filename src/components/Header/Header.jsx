import {Card} from "antd";
import {AiOutlinePlus} from "react-icons/ai";
import "./static/Header.css"
import {useState} from "react";
import AddEditTodoModal from "../Modals/AddEditTodoModal.jsx";

function Header({title, color, status, numberOfTodo = 0}) {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <Card
                className={"header"}
                style={{borderTopColor: color}}
            >
                <div className="header_section">
                    <div className={'title'}>
                        {title}
                        <span> {numberOfTodo} </span>
                    </div>
                    <AiOutlinePlus
                        size={18}
                        className={'cursor-pointer'}
                        onClick={() => setOpenModal(true)}
                    />
                </div>
            </Card>
            <AddEditTodoModal status={status} openModal={openModal} setOpenModal={setOpenModal}/>
        </>
    );
}

export default Header;