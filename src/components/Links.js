import React from "react";
import "../styles/links.css"




export const Links = () => {
    const about = "about"
    const projects = "projects"
    const resume = "resume"
    return (
        <div className="links-container">
            <div className="links">
                {about}
            </div>
            <div className="links">
                {projects}
            </div>
            <div className="links">
                {resume}
            </div>
        </div>


    )
}