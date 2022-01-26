import React from 'react';
import './Navbar.css';
export default function Navbar() {
    return (
        <nav className='container'>
            <ul className='nav-left'>
                <li></li>
                <li>Watch Live</li>
                <li>Full Series</li>
                <li>Shows</li>
                <li>Categories</li>
                <li>News</li>
            </ul>
            <ul className='nav-right'>
                <li>britbox</li>
                <li>watch ad-free now</li>
                <li> Sign In</li>
                <li>search</li>
            </ul>
        </nav>
    );
}
