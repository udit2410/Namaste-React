import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLQ11zD13HwymdTMc5dAheuFED2mX-TPwIA&usqp=CAU" alt="" />
        </div>
        <div className="nav-list">
            <ul className="list">
               <Link> <li>Home </li></Link>
               <Link > <li>Contact us</li></Link>
               <Link to="/aboutUs"> <li>About us </li></Link>
               <Link> <li>Cart</li></Link>
            </ul>
        </div>
        </div>
    )
}

export default Header;