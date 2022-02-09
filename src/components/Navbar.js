import React from 'react';
import './Navbar.css';
export default function Navbar() {
    return (
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
                    Sign In <i class='fas fa-user-circle'></i>
                </li>
                <li>
                    <i class='fas fa-search'></i>
                </li>
            </ul>
        </nav>
    );
}
