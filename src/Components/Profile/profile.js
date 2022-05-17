import React from "react";
import { ProfilePhoto } from "../../import";
import "./profile.css";

function profile({ text }) {
  return (
    <>
      <div className="picture">
        <img src={ProfilePhoto} alt="profile" />
        <h3>{text}</h3>
      </div>
    </>
  );
}

export default profile;
