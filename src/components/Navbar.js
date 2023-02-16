import React from "react";
import './style/Navbar.scss'
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className='navbar'>
            <Logo />
            <ColorToggle />
            <div>
                <Link to="/portfolio-site/home">Home</Link>
                <Link to="/portfolio-site/projects">Projects</Link>
                <Link to="/portfolio-site/contact">Contact</Link>
            </div>
            <HamburgerMenu />
        </nav>
    )
}

function Logo(){
    return(
        <h2 style={{ color: 'white' }}>
            Cordre Payne
        </h2>
    )
}

function HamburgerMenu(){
    return(
        <svg id='hamburgerMenu' xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" display='none'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    )
}

function ColorToggle(){
    return(
        <div id="theme-toggle">
            <div id="theme-button"></div>
        </div>
    )
}
export default Navbar;