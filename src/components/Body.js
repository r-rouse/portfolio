import React from "react";
import "../styles/body.css"
import { Links } from "./Links";
import { MyDrawer } from "./Drawer";


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