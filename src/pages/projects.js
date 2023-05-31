import React from "react";
import { Link } from 'react-router-dom';
import MyCarousel from "../components/Carousel";
import "../styles/pages.css"


export const Project = () => {


    return(
        <div className="project-container">
            <h1>projects</h1>
        <Link to={"/"} className="links">home</Link>
        <MyCarousel/>
        </div>
    )
}