import React from "react";
import aboutMeDescription, { aboutMeDescription1, aboutMeDescription2, aboutMeDescription3 } from "../constants/aboutMe";
import "../styles/pages.css"



export const About = () => {

    return (
        <>
            <div className="header">
            </div>
            <div className="about-me-container">
                <div className="about-me-content">{aboutMeDescription}<br/>{aboutMeDescription1}<br/>{aboutMeDescription2}<br/>{aboutMeDescription3}
                </div>
            </div>
        </>
    )
}