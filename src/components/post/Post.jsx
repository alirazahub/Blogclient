import React from "react";
import "./post.css";

function Post() {
  return (
    <>
        <div class="my-3 col-md-4 col-10 card">
          <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
          <div className="text-center postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
            <h5 class="postTitle text-center">Post Title</h5>
            <hr />
            <div className="postDate my-4 text-center">
            13-jan-2002
          </div>
            <p class="postDesc card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
    </>
  );
}
export default Post;