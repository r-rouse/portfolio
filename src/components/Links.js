import React from "react";
import "../styles/links.css"
import { Link } from 'react-router-dom';




export const Links = () => {
    const projects = "projects"
    const resume = "resume"
    return (
        <div className="links-container">

            <Link className="link-item" to={"/projects"}>
                {projects}
            </Link>
            <Link className="link-item" to={"/resume"}>
                {resume}
            </Link>
        </div>


    )
}