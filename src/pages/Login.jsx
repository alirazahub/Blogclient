import React from 'react'
import { Link } from "react-router-dom";


function Login() {
  return (
    <>
    <div className='custom_margin'>
            <h2 className='text-center my-3'>Login</h2>
            <form className='col-md-3 col-10 mx-auto'>
                <div className="mb-3">
                    <label htmlFor="Username" className="form-label">Username</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control"  />
                </div>
                <button type="submit" className="btn btn-outline-primary">Login</button>
            </form>
                <div className="col-md-3 mt-3 mx-auto">
                  Don't have account ? <Link to="/register">Click here to Register</Link>
                </div>
            
        </div>
        </>
  )
}

export default Login;
