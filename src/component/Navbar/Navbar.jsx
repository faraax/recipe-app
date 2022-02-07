import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <nav className='container'>
                <Link to="/" className="brand">
                    <h1>Cooking Ninja</h1>
                </Link>
                <ul>
                    <Link to="/create">Create Recipe</Link>
                </ul>
            </nav>
        </div>
    );
}
