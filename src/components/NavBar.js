import React from "react";
import "./App.css";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="nav">
      <h2> Heaven's Blog</h2>
      <div className="icons flex">
        <div className="flex">
        <a href="https://github.com/Heavenlydawn?tab=repositories">
          <BsGithub  className="mr-10 w-14 h-14"/>
        </a>
        <a href="https://twitter.com/GabrielHeavenl1">
          <BsTwitter className="ml-10 w-14 h-14" />
        </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
