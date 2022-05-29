import React from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import PublicIcon from "@mui/icons-material/Public";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import {
  Bro,
  Cars,
  Client,
  ClientThree,
  ClientTwo,
  Cute,
  Emoji,
  Likey,
  Live,
  Lovey,
  Meme,
  Messi,
  Myself,
  Photo,
  Pict,
  Sis,
  Storyimg,
  Storyuser,
  Unique,
  Unsplash,
} from "../../import";
import "./Feeds.css";
import Story from "./Story/Story";
import Post from "../Post/Post";

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
              <h5>Create story</h5>
            </div>
          </div>
        </div>
        <div className="story_side">
          <Story pic={Storyimg} pics={Storyimg} Username="Victor Kalu" />
          <Story pic={Storyuser} pics={Sis} Username="Glory Kalu" />
          <Story pic={Cute} pics={Myself} Username="Vicky Frosh" />
          <Story pic={Unique} pics={Unique} Username="Unique Wig" />
        </div>
        <div className="story_side_icon">
          <ArrowForwardIcon />
        </div>
      </div>
      <div className="post">
        <div className="post_side">
          <Post Mem={Meme} />
          <input type="text" placeholder="What's on your mind, Victor?" />
        </div>
        <div className="border"></div>
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
      <div className="create_room">
        <div className="main">
          <VideoCallIcon />
          <h5>Create Room</h5>
        </div>
        <div className="create_room_img">
          <Post Mem={Bro} />
          <Post Mem={Storyimg} />
          <Post Mem={Messi} />
          <Post Mem={Client} />
          <Post Mem={ClientTwo} />
          <Post Mem={ClientThree} />
          <Post Mem={Cars} />
          <Post Mem={Sis} />
          <Post Mem={Photo} />
          <Post Mem={Unsplash} />
          <div className="create_room_icon">
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
      <div className="upload">
        <div className="upload_one">
          <div className="upload_img">
            <Post Mem={Myself} />
          </div>
          <div className="upload_text">
            <h4>Vicky Frosh</h4>
            <div className="upload_icon">
              <p>3h • </p>
              <PublicIcon />
            </div>
          </div>
        </div>
        <div className="upload_two">
          <MoreHorizIcon />
        </div>
      </div>
      <div className="main_image">
        <img src={Messi} alt="" />
      </div>
      <div className="upload_section">
        <div className="upload_section_one">
          <div className="like">
            <img src={Likey} alt="" />
            <img src={Lovey} alt="" />
            <p>33K</p>
          </div>
          <div className="comment">
            <p>623 Comments</p>
            <p>805 Shares</p>
          </div>
        </div>
        <div className="upload_section_two">
          <ThumbUpAltOutlinedIcon />
          <ChatBubbleOutlineOutlinedIcon />
          <ReplyOutlinedIcon />
        </div>
      </div>
    </>
  );
}

export default Feeds;
