import React from "react";

function Story({ pic, pics, Username }) {
  return (
    <>
      <div className="feeds_story">
        <img src={pic} alt="" className="feed_story_img" />
        <img src={pics} alt="" className="feed_story_user" />
        <h4>{Username}</h4>
      </div>
    </>
  );
}

export default Story;
