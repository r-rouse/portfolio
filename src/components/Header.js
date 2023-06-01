// import { useState } from 'react';
import React from "react";
// import axios from 'axios';
import imageSrc from '../assets/1639858667163.jpeg';
import "../styles/header.css"
import NameFallingAnimation from '../effects/fallingAnimation';


export const Header = () => {
    // const profileName = "Randall Rouse"
    // const [time, setTime] = useState("")
    // const [temp, setTemp] = useState("")
    // axios.get('https://api.tomorrow.io/v4/weather/realtime?location=33.46106,-118.112123&units=imperial&apikey=67cH1h1U7OixHly0DgSzFjlRuodFHoYS')
    // .then(response => {
    //   setTime(response.data.data.time)
    //   setTemp(response.data.data.values.temperature)
    //   console.log(time, temp);
    // })
    // .catch(error => {
    //   console.error(error);
    // })

    return(
        <div className="header">
            <div className="neon-border">
            <img src={imageSrc} className="profile-pic" alt="profile pic"></img>
            </div>
            <NameFallingAnimation/>
        </div>
    )
}