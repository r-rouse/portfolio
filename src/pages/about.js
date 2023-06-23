import React from "react";
import aboutMeDescription from "../constants/aboutMe";
import "../styles/pages.css"



export const About = () => {

    return (
        <>
            <div className="header">
            </div>
            <div className="about-me-container">
                <div className="about-me-content">{aboutMeDescription}
                </div>
            </div>
        </>
    )
}