import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import GenrePage from './pages//GenrePage';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/genre/:id' element={<GenrePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
