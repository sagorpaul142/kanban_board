import KanbanBoard from "./components/KanbanBoard/KanbanBoard.jsx";
import GlobalContextProvider from "./Context/GlobalContext.jsx";

function App() {

    return (
        <GlobalContextProvider>
            <h1 className={'text-center'}>Welcome to Kanban Board</h1>
            <KanbanBoard/>
        </GlobalContextProvider>
    )
}

export default App
