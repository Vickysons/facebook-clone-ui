import React from "react";
import "./Sidebar.css";
import Profile from "../Profile/profile";
import Sidebaricon from "../Sidebar_icon/Sidebaricon";
import {
  Events,
  Favorites,
  Friends,
  Groups,
  MarketPlace,
  Memories,
  MostRecent,
  Pages,
  Saved,
  Watch,
} from "../../import";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Sidebar() {
  return (
    <>
      <div className="sidebar_img">
        <div className="sidebar__img__profile">
          <Profile text="Victor Kalu" />
        </div>
        <Sidebaricon icon={Friends} text="Friends" />
        <Sidebaricon icon={Groups} text="Groups" />
        <Sidebaricon icon={MarketPlace} text="Marketplace" />
        <Sidebaricon icon={Watch} text="Watch" />
        <Sidebaricon icon={Memories} text="Memories" />
        <Sidebaricon icon={Saved} text="Saved" />
        <Sidebaricon icon={Pages} text="Pages" />
        <Sidebaricon icon={Events} text="Events" />
        <Sidebaricon icon={MostRecent} text="Most Recent" />
        <Sidebaricon icon={Favorites} text="Favorites" />
        <div className="mui">
          <KeyboardArrowDownIcon />
          <h4>See more</h4>
        </div>
        <p>
          Privacy• Terms• Advertising• Ad Choices • Cookies • More • Meta @ 2022
        </p>
      </div>
    </>
  );
}

export default Sidebar;
