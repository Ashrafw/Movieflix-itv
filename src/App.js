import './App.css';
import MainLanding from './components/MainLanding';
import Navbar from './components/Navbar';
import Genres from './components/Genres';
function App() {
    return (
        <div className='App'>
            <Navbar />
            <MainLanding />
            <hr />
            <Genres />
        </div>
    );
}

export default App;
