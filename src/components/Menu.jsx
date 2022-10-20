import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SchoolIcon from "@mui/icons-material/School";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { GolfCourseRounded } from "@mui/icons-material";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import "./Menu.css";

const Menu = () => {
  const [selectCategory, setSelectCategory] = useState('new')
  const select = () => {
    setSelectCategory()  
  }
  const menuIcons = {
    width: "32px",
    height: "32px",
    display:"block",
    marginLeft:"20px",
    color:"red"
  };
  return (
    <>
    <div className="main-container">
      <div className="menu-container">
        <div className="store-menu"  onClick={select} ><HomeIcon style={menuIcons} className="ok" /><Link rel="stylesheet" style={{ textDecoration: "none" }} to="/home"><span className="menu">Home</span></Link></div>
        <div className="store-menu"><CodeIcon style={menuIcons} /><Link rel="stylesheet" style={{ textDecoration: "none" }} to="/reactjs"><span className="menu">ReactJs</span></Link></div>
        <div className="store-menu"><CodeIcon style={menuIcons} /><Link rel="stylesheet" style={{ textDecoration: "none" }} to="/nextjs"><span className="menu">NextJs</span></Link></div>
        <div className="store-menu"><MusicNoteIcon style={menuIcons} /><Link rel="stylesheet" style={{ textDecoration: "none" }} to="/music"><span className="menu">Music</span></Link></div>
        <div className="store-menu"><SchoolIcon style={menuIcons} /><Link rel="stylesheet" style={{ textDecoration: "none" }} to="/education"><span className="menu">Education</span></Link></div>
        <div className="store-menu"><GraphicEqIcon style={menuIcons} /><Link rel="stylesheet" style={{ textDecoration: "none" }} to="/podcast"><span className="menu">Podcast</span></Link></div>
        <div className="store-menu"><LiveTvIcon style={menuIcons} /><Link rel="stylesheet" style={{ textDecoration: "none" }} to="/movie"><span className="menu">Movie</span></Link></div>
        <div className="store-menu"><SportsEsportsIcon style={menuIcons} /><Link rel="stylesheet" style={{ textDecoration: "none" }} to="/gaming"><span className="menu">Gaming</span></Link></div>
        <div className="store-menu"><GolfCourseRounded style={menuIcons} /><Link rel="stylesheet" style={{ textDecoration: "none" }} to="/sports"><span className="menu">Sports</span></Link></div>
        <div className="store-menu"><CheckroomIcon style={menuIcons} /><Link rel="stylesheet" style={{ textDecoration: "none" }} to="/fashion"><span className="menu">Fashion</span></Link></div>
      </div>
    </div>
    </>
  );
};

export default Menu;
