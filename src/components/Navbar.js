import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import { Button } from "./Button";
import './Navbar.css';

function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        window.innerWidth <= 960 ? setButton(false) : setButton(true);
    };

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);

        return () => {
            window.removeEventListener('resize', showButton);
        };
    }, []);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/react-website/" className="navbar-logo" onClick={closeMobileMenu}>
                        LOGO
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/react-website/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/react-website/github' className="nav-links" onClick={closeMobileMenu}>
                                GitHub
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/react-website/resume' className="nav-links" onClick={closeMobileMenu}>
                                Resume
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/react-website/resources' className="nav-links" onClick={closeMobileMenu}>
                                Resources
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' location="/react-website/contact">Contact</Button>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar