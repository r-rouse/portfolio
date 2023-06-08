import React from "react";
import reactLogo from "../assets/react-logo.png";
import postgreSqlLogo from "../assets/Postgresql_elephant.svg.png"
import "../styles/pages.css";




export const  Logos = (props) => {


return(

    <div className="logo-container">
    <img
      src={reactLogo}
      className={`react-logo-${props.visible}`}
      alt="React Logo"
    />
    <img
      src={postgreSqlLogo}
      className={`postgres-logo-${props.visible}`}
      alt="Postgres-Logo"
    />
  </div>
)



}