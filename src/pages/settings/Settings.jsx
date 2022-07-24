import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import  { Link } from 'react-router-dom'
import './settings.css'


function Setting() {
  return (
    <div className='row container-fluid'>
    <div className='col-md-9'>
    <div className='custom_margin'>
      <h2 className='custom_margin text-center my-3'>Update Information</h2>
      <form className='col-md-6 col-10 mx-auto'>
      <label>Profile Picture</label>
          <div className="settingsPP">
            <img
            src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
            //   src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <div className="settingsPPIcon">
              <i className="far fa-user-circle"></i>

              </div>
            </label>
            
            <input className='input-file'
              type="file"
              id="fileInput"
            //   style={{ display: "none" }}
            //   onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">UserName</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">Update</button>
      </form>
      <div className="col-md-2 mt-3 mx-auto">
        <Link>Delete Account<i class="fa-solid fa-trash-can"></i></Link>
      </div>
    </div>
    </div>
    <div className='col-md-3'>
    <SideBar />

    </div>
    </div>
  )
}

export default Setting