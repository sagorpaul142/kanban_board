import {Card} from "antd";
import {AiOutlinePlus} from "react-icons/ai";
import "./static/Header.css"

function Header({title, color, status, numberOfTodo = 0}) {
    return (
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
                />
            </div>
        </Card>
    );
}

export default Header;