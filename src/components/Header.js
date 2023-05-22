import React from "react";
import imageSrc from '../assets/1639858667163.jpeg';
import "../styles/headerStyle.css"


export const Header = () => {
    return(
        <div className="header">
            <img src={imageSrc} className="profile-pic"></img>
        </div>
    )
}