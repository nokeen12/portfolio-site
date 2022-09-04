import React from "react";
import '../../style/Navbar.scss'
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className='navbar'>
            <Logo />
            <div>
                <Link to="/home">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <HamburgerMenu />
        </nav>
    )
}

function Logo(){
    return(
        <h2>
            Cordre Payne
        </h2>
    )
}

function HamburgerMenu(){
    return(
        <svg id='hamburgerMenu' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" display='none'>
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    )
}

export default Navbar;