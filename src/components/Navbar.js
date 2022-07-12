import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className='navbar'>
            <div className='links'>
                 <Link to="/aboutme"> About me</Link>
                 <Link to="/projects"> Projects </Link>
                 <Link to="/Resume"> Resume</Link>
            </div>
        </div>
    )
}

export default Navbar;