import React, {useState} from "react";
import {NavLink} from 'react-router-dom';
import logo from './images/biohazardLogo.png';
import './Navbar.css';

function Navbar(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <NavLink  to="/" className="navbar-logo" exact onClick={closeMobileMenu}>
                        <img src={logo} alt="Biohazard Logo" className="navbar-logo-image" />
                    </NavLink >
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <NavLink to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/work-projects/' className="nav-links" onClick={closeMobileMenu}>
                                GitHub
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/resume/' className="nav-links" onClick={closeMobileMenu}>
                                Resume
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about/' className="nav-links" onClick={closeMobileMenu}>
                                Resources
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact/' className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar