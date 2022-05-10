import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ChatIcon from "@mui/icons-material/Chat";
import { FBlogo } from "../../import";
import Profile from "../profile";
import "./Navigation.css";

function Navigation() {
  return (
    <>
      <div className="Navigation">
        <div className="navigation_left">
          <img src={FBlogo} alt="logo" />
          <input type="text" placeholder="search facebook" />
        </div>

        <div className="navigation_center">
          <HomeIcon />
          <OndemandVideoIcon />
          <PeopleAltIcon />
          <SmartToyIcon />
        </div>

        <div className="navigation_right">
          <Profile />
          <AppsIcon />
          <ChatIcon />
          <NotificationsIcon />
          <ArrowDropDownIcon />
        </div>
      </div>
    </>
  );
}

export default Navigation;
