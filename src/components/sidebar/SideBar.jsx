import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <Link to='' className="link">
          <li className="sidebarListItem">
          </li>
          </Link>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <Link className='sidebarIcon'><i className="fab fa-facebook-square"></i></Link>
          <Link className='sidebarIcon'><i className="fab fa-instagram-square"></i></Link>
          <Link className='sidebarIcon'><i className="fab fa-pinterest-square"></i></Link>
          <Link className='sidebarIcon'><i className="fab fa-twitter-square"></i></Link>
        </div>
      </div>
    </div>
  )
}

export default SideBar;