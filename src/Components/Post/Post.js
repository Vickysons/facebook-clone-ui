import React from "react";
import "./Post.css";

function Post({ Mem }) {
  return (
    <>
      <div className="feeds_post">
        <img src={Mem} alt="" className="feed_post_img" />
      </div>
    </>
  );
}

export default Post;
