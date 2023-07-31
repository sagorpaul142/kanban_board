import KanbanBoard from "./components/KanbanBoard/KanbanBoard.jsx";
import GlobalContextProvider from "./Context/GlobalContext.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

    return (
        <GlobalContextProvider>
            <h1 className={'text-center'}>Welcome to Kanban Board</h1>
            <KanbanBoard/>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </GlobalContextProvider>
    )
}

export default App
