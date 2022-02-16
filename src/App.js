import './App.css'
import Home from './Layout/Home/Home'
import Navbar from './Layout/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div className="App ">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Navbar />
                                <Home />
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
