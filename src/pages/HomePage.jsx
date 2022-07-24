import React from 'react'
import Header from "../components/header/Header";
import Posts from "../components/posts/Posts";
import Sidebar from "../components/sidebar/SideBar";


function HomePage() {
  return (
    <div className='container'>
      <Header />
      <div className="row">
        <div className="col-md-9">
          <Posts />
        </div>
        <div className="col-md-3">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default HomePage
