import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/Navbar'
import Form from './components/Form/Form'
import Variables from './components/Variables/Variables'
import GreatingPage from './components/GreatingPage/GreatingPage'

//TODO: refactor for varables /variableID
const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <NavBar />
                <Routes>
                    <Route path="/form" element={<Form />} />
                    <Route path="*" element={<GreatingPage />} />
                    <Route path="/variables" element={<Variables />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
