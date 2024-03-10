import "./Navbar.css"

import { FaAngular } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Navbar = () =>{
    return(
        <>
        <nav className="nav-wrapper">
            <a href="#home" className="logo"><FaAngular></FaAngular> Ananth</a>
            <div id="menu"><TiThMenuOutline></TiThMenuOutline></div>
            <div className="nav-content">
                <ul>
                <li><a className="menu-item" href="#home">Home</a></li>
                <li><a className="menu-item" href="#about">About</a></li>
                <li><a className="menu-item" href="#skills">Skills</a></li>
                <li><a className="menu-item" href="#education">Education</a></li>
                <li><a className="menu-item" href="#work">Work</a></li>
                <li><a className="menu-item" href="#experience">Experience</a></li>
                <li><a className="menu-item" href="#contact">Contact</a></li>
                </ul>
            </div>    
        </nav>
        </>
    )
}

export default Navbar;