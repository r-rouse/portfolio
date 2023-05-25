import React from "react";
import "../styles/links.css"
import { Link } from 'react-router-dom';




export const Links = () => {
    const about = "about"
    const projects = "projects"
    const resume = "resume"
    // const textBox = {
    //     about: "hey there",
    //     projects: "checkout what ive been working on",
    //     resume: "self explainitory"
    // }
    return (
        <div className="links-container">
            <Link className="links" to={"/about"}>
                {about}
                {/* <div className="text-1">{textBox.about}</div> */}
            </Link>
            <Link className="links" to={"/projects"}>
                {projects}
            </Link>
            <Link className="links" to={"/resume"}>
                {resume}
            </Link>
        </div>


    )
}