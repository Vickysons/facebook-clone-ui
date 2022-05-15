import React from "react";

import "./Sidebar.css";
import { ProfilePhoto } from "../../import";
import Profile from "../Profile/profile";
function Sidebar({ text }) {
  return (
    <>
      {/* <div className="Sidebar">Sidebar</div> */}
      <div className="sidebar_container">
        <div className="sidebar_img">
          <Profile text={"Victor Kalu"} />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
