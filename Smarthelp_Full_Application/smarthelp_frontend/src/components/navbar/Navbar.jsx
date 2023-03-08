import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <div class="navbar-background">
            <nav>
                <Link to="/"><img src="images/logo.png" /></Link>
                <div class="log-reg" id="logReg">
                    <ul>
                        <li><Link to="/login">LOGIN</Link></li>
                        <li><Link to="/register">REGISTER</Link></li>
                    </ul>
                </div>
                <i class="fa fa-bars" onClick="showMenu()"></i>
            </nav>
            <nav>
                <div class="nav-links" id="navLinks">
                    <i class="fa fa-times" onClick="hideMenu()"></i>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/blog">BLOG</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar