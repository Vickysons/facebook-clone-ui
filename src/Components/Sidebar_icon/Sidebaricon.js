import React from "react";
import "./Sidebaricon.css";
function Sidebaricon({ text, icon }) {
  return (
    <>
      <div className="icons">
        <img src={icon} alt="" />
        <h3>{text}</h3>
      </div>
    </>
  );
}

export default Sidebaricon;
