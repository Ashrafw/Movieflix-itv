import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {
    const [searchInput, setSearchInput] = useState('');
    const [term, setTerm] = useState('');
    const [showClass, setShowClass] = useState(false);
    const navigate = useNavigate();
    const searchInputFocus = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/itv-website/search/${term}`);
    };

    return (
        <div className='navbar'>
            <nav className='container'>
                <ul className='nav-left'>
                    <Link to='/itv-website/' className='logo-site'>
                        {/* <img src='images/itv-emblem.png' alt='' srcset='' /> */}
                        Movie<span>Flix</span>
                    </Link>
                    <Link to='/itv-website/'>TV shows</Link>
                    <Link to='/itv-website/genre/1'>Action</Link>
                    <Link to='/itv-website/genre/2'>Drama</Link>
                    <Link to='/itv-website/genre/3'>Crime</Link>
                    <Link to='/itv-website/genre/5'>Romance</Link>
                    <Link to='/itv-website/genre/6'>Thriller</Link>
                    <Link to='/itv-website/genre/4'>Kids</Link>
                </ul>
                <ul className='nav-right'>
                    {/* <Link to='/'>britbox</Link>
                    <Link to='/'>watch ad-free now</Link> */}
                    <Link to='/itv-website/'>
                        {' '}
                        Sign In <i className='fas fa-user-circle '></i>
                    </Link>
                    <a
                        className={showClass ? 'show' : ''}
                        onClick={() => {
                            setShowClass((prev) => (prev === true ? false : true));
                            // () => searchInputSet();
                        }}
                    >
                        <i className={`fas fa-search`}></i>
                    </a>
                </ul>
            </nav>

            <form
                className={`form-search-main ${showClass ? 'show' : ''}`}
                onSubmit={handleSubmit}
            >
                <input
                    type='text'
                    placeholder='Search for movies...'
                    id='search'
                    onChange={(e) => setTerm(e.target.value)}
                    autoFocus
                    onFocus={(e) => e.currentTarget.select()}
                    required
                    ref={(inputElement) => {
                        if (inputElement && showClass) {
                            inputElement.focus();
                        }
                    }}
                />
            </form>
        </div>
    );
}
