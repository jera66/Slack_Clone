import React, { useState } from "react";
import "./Header.css";
import { Avatar, Input } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/Help";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      {/* AVATAR for logged in user */}
      <div className="header__left">
        {/* <Avatar
          src="https://lh3.googleusercontent.com/ogw/ADGmqu8lUWMnvoLoYJmqkjIojCXMtNQxMeR_No7CeLM0=s83-c-mo"
          alt="user profile picture"
        /> */}
        <Avatar
          className="header__avatar"
          src={user?.photoURL}
          alt={user.displaName}
        />

        {/* TIME ICON */}
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <input placeholder="Search item here" />
        <SearchIcon />
      </div>
      {/* Search Icon */}

      <div className="header__right">
        {/* help icons */} <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;