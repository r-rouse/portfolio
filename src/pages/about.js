import React from "react";
import { Link } from 'react-router-dom';
import aboutMeDescription from "../constants/aboutMe";
import "../styles/pages.css"



export const About = () => {

    return (
        <>
            <div className="header">
                <Link to={"/"} className="links">home</Link>
            </div>
            <div className="about-me-container">
                <div className="about-me-content">{aboutMeDescription}
                </div>
            </div>
        </>
    )
}