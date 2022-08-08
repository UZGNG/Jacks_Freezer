import React from 'react';
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header className="header">
            <div className="header-div">


                <h1><img className='logo' src="../../media/logo-img.png"/></h1>

               <div className='nav-list'>
                   <Link to="/" className="nav-btn nav-link btn">Home</Link>
                   <Link to="/about" className="nav-btn nav-link btn">About</Link>
                   <Link to="/owner" className="nav-btn nav-link btn">Owner</Link>
                   <Link to="/contact" className="nav-btn nav-link btn">Contact</Link>
               </div>
            </div>
        </header>
    )
}