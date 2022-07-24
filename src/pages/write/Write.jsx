import React from 'react'
import "./write.css";

function Write() {
  return (
    <>
      <div className="container write">
        {/* {file && ( */}
        <img className="writeImg"
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          // src={URL.createObjectURL(file)} 
          alt="" />
        {/* )} */}

        <form
        //   onSubmit={handleSubmit}
        >
          <label htmlFor="fileInput">
            <div className="writeIcon">
              <i className="fas fa-plus"></i>
            </div>

          </label>
          <input
            type="file"
            id="fileInput"
          // style={{ display: "none" }}
          // onChange={(e) => setFile(e.target.files[0])}
          />

          <div className="container col-md-5">
            <div class="mb-3">
              <label class="form-label">Title</label>
              <input type="text" class="form-control" placeholder="Title" />
            </div>
            <div class="mb-3">
              <label class="form-label">Description</label>
              <textarea class="form-control" placeholder='Tell your story .....' rows="4"></textarea>
            </div>
          </div>
          <div className="col-md-1 mx-auto">
            <button className='btn btn-outline-primary'>Publish</button>
          </div>
        </form>
      </div>

    </>
  )
}

export default Write