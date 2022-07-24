import React from 'react'
import { Link } from "react-router-dom";
import "./singlePost.css";

function singlePost() {
  return (
    <>
      <div class="card mb-3">
        <img className='singlePostImg' src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt="..." />
        <div class="card-body">
          <div className="row">
            <h5 class="col-md-9 card-title text-center ">Card title</h5>

            <div className="col-md-3 singlePostIcon">
              <i
                className="mx-3 fa-solid fa-pen-to-square"
              // onClick={() => setUpdateMode(true)}
              > </i>
              <i
                className="fa-solid fa-trash-can"
              // onClick={handleDelete}
              ></i>
            </div>
          </div>
          <hr />
          <div className="singlePostInfo">
            <span>
              Author:
              <Link
                //   to={`/?user=${post.username}`}
                className="link">Post Name
                {/* <b> {post.username}</b> */}
              </Link>
            </span>
            <span className="singlePostDate">
              {/* {new Date(post.createdAt).toDateString()} */}13-jan-2020
            </span>
          </div>
          <p class="singlePostDesc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </>
  )
}

export default singlePost;