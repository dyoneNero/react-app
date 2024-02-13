import NotFound from "pages/404"
import Main from "pages/main"
import { Route, Routes } from "react-router-dom"


const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default App