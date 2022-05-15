import React from "react";
import { ProfilePhoto } from "../../import";
import "./profile.css";

function profile({ text }) {
  return (
    <>
      <div className="picture">
        <img src={ProfilePhoto} alt="profile" />
        <h4>{text}</h4>
      </div>
    </>
  );
}

export default profile;
