import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import GenrePage from './pages//GenrePage';
import WatchMovie from './pages/WatchMovie';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/genre/:id' element={<GenrePage />} />
                    <Route path='/movie/:id' element={<WatchMovie />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
