import React from "react";
import PdfFile from "../assets/Randall_Rouse_Resume_2k23_Redacted.pdf"
import { Link } from 'react-router-dom';


export const Resume = () => {

    return(<>
        <Link to={"/"} className="link-item">home</Link>
        <iframe src={PdfFile} width="100%" height="1500px" title="resume"></iframe>
        </>

    )
}