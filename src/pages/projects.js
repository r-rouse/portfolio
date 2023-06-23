import React from "react";
import { Link } from 'react-router-dom';
import MyCarousel from "../components/Carousel";
import "../styles/pages.css"


export const Project = () => {


    return (
        <>
            <Link to={"/"} className="link-item">home</Link>

            <div className="project-container">
                <div className="project-carousel">
                    <MyCarousel />
                </div>
            </div>
        </>
    )
}