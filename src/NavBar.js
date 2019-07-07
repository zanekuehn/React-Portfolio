import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';




function NavBar() {

  return (
    <nav className="Nav">
      <div className="list-container"><ul className="nav-list">
        <Link to='/'><li className="nav-item">Home</li></Link>
        <Link to='/aboutme'><li className="nav-item">About Me</li></Link>
        <Link to='/MyWork'><li className="nav-item">My Work</li></Link>
        <li className="nav-item">Contact Me</li>
      </ul></div>

    </nav>

  )
}

export default NavBar;