import React from "react";
import { Meme } from "../../import";
import "./profile.css";

function profile({ text }) {
  return (
    <>
      <div className="picture">
        <img src={Meme} alt="profile" />
        <h3>{text}</h3>
      </div>
    </>
  );
}

export default profile;
