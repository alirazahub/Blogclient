import React from 'react'
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className='custom_margin'>
      <h2 className='custom_margin text-center my-3'>Register</h2>
      <form className='col-md-3 col-10 mx-auto'
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
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
        <button type="submit" className="btn btn-outline-primary">Sign Up</button>
      </form>
      <div className="col-md-3 mt-3 mx-auto">
        Already have account ? <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Register;