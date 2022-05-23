import React from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
// import PublicIcon from '@mui/icons-material/Public';
import {
  Bro,
  Cute,
  Emoji,
  Live,
  Meme,
  Myself,
  Pict,
  Sis,
  Storyimg,
  Storyuser,
  Unique,
} from "../../import";
import "./Feeds.css";
import Story from "./Story/Story";

function Feeds() {
  return (
    <>
      <div className="Feeds">
        <div className="create_story">
          <img src={Myself} alt="" />
          <div className="create_story_icon">
            <div className="icon_story">
              <AddCircleOutlineRoundedIcon />
            </div>
            <div className="story_text">
              <h4>Create story</h4>
            </div>
          </div>
        </div>
        <div className="story_side">
          <Story pic={Storyimg} pics={Storyimg} Username="Victor Kalu" />
          <Story pic={Storyuser} pics={Sis} Username="Glory Kalu" />
          <Story pic={Cute} pics={Myself} Username="Vicky Frosh" />
          <Story pic={Unique} pics={Unique} Username="Unique Wig" />
        </div>
      </div>
      <div className="post">
        <div className="post_side">
          <img src={Meme} alt="" />
          <input type="text" placeholder="What's on your mind, Victor?" />
        </div>
        <div className="other_side">
          <div className="live">
            <img src={Live} alt="" />
            <h5>Live video</h5>
          </div>
          <div className="pict">
            <img src={Pict} alt="" />
            <h5>Photo/video</h5>
          </div>
          <div className="emoji">
            <img src={Emoji} alt="" />
            <h5>Feeling/activity</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feeds;
