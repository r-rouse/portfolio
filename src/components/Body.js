import React from "react";
import MyDrawer from "./Drawer";
import "../styles/body.css"
import { Links } from "./Links";
import { Header } from "./Header";


export const Body = () => {


    return (
        <div className="body-container">
            <div className="links">
                <Links />
            </div>
            <div className="drawer-chevron">
                <MyDrawer />
            </div>
        </div>
    )
}