import React from "react";
import {
  Bro,
  Cute,
  Myself,
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
        <Story pic={Myself} pics={Storyuser} Username="Create story" />
        <Story pic={Storyimg} pics={Storyimg} Username="Victor Kalu" />
        <Story pic={Storyuser} pics={Sis} Username="Glory Kalu" />
        <Story pic={Cute} pics={Myself} Username="Vicky Frosh" />
        <Story pic={Unique} pics={Unique} Username="Unique Wig" />
      </div>
    </>
  );
}

export default Feeds;
