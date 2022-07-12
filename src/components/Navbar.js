import React from 'react'
import { Link } from 'react-router-dom';

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