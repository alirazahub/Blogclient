import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import profileImg from '../../profile.jpg'
import './navbar.css'

function Navbar() {
    const user = true;
  return (
    <>

      <nav className="sticky-top navbar custom__bg navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand" to='/'>
            <Link className='links'>
          <i className="fab fa-facebook-square"></i>
            </Link>
            <Link className='links'>
                <i className="fab fa-twitter-square"></i>
            </Link>
            <Link className='links'>
                <i className="fab fa-pinterest-square"></i>
            </Link>
            <Link className='links'>
                <i className="fab fa-instagram-square"></i>
            </Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
              <li className="nav-item">
                <NavLink exact activeClassName='active' className="nav-link" to='/'>HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName='active' className="nav-link" to='/about'>ABOUT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName='active' className="nav-link" to='/contact'>CONTACT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact activeClassName='active' className="nav-link" to='/write'>WRITE</NavLink>
              </li>
              </ul>
            

              {user ? <div ><img className="topImg" src={profileImg} alt="Profile_Image" />{user && <Link className="links">LOGOUT</Link>}</div>
              :
              <ul className="topList">
                    <li className="nav-item">
                        <NavLink exact activeClassName='active' className="nav-link" to="/login">LOGIN</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink exact activeClassName='active' className="nav-link" to="/register">REGISTER</NavLink>
                    </li>
                </ul>}
                <i className="topSearchIcon fas fa-search"></i>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar;