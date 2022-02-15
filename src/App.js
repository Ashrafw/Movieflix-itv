import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import GenrePage from './pages//GenrePage';
import WatchMovie from './pages/WatchMovie';
import Search from './pages/Search';
import Footer from './components/Footer';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/itv-website/' element={<Home />} />
                    <Route path='/itv-website/genre/:id' element={<GenrePage />} />
                    <Route path='/itv-website/movie/:id' element={<WatchMovie />} />
                    <Route path='/itv-website/search/:searchid' element={<Search />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
