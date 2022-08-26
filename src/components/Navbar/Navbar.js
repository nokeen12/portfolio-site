import React from "react";
import './Navbar.css'
import Logo from "../Logo/Logo";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
function Navbar(){
    return(
        <nav className='navbar'>
            <Logo />
            
            <HamburgerMenu />
        </nav>
    )
}
export default Navbar;