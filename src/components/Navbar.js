import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {
    const [searchInput, setSearchInput] = useState('');
    const [term, setTerm] = useState('');
    const [showClass, setShowClass] = useState(false);
    // const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // setShowClass((prev) => (prev === true ? false : true));
        // navigate(`/search/${term}`);
    };
    return (
        <div className='navbar'>
            <nav className='container'>
                <ul className='nav-left'>
                    <li>
                        <img src='images/itv-emblem.png' alt='' srcset='' />
                    </li>
                    <li>Watch Live</li>
                    <li>Full Series</li>
                    <li>Shows</li>
                    <li>Categories</li>
                    <li>News</li>
                </ul>
                <ul className='nav-right'>
                    <li>britbox</li>
                    <li>watch ad-free now</li>
                    <li>
                        {' '}
                        Sign In <i class='fas fa-user-circle '></i>
                    </li>
                    <li className={showClass ? 'show' : ''}>
                        <i
                            class={`fas fa-search `}
                            onClick={() =>
                                setShowClass((prev) => (prev === true ? false : true))
                            }
                        ></i>
                    </li>
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
                    required
                />
            </form>
        </div>
    );
}
