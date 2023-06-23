import React from "react";
import { Header } from "../components/Header";
import { Links } from "../components/Links";
import { MyDrawer } from "../components/Drawer";
import "../styles/home.css"
import { About } from "./about";


const Home = () => {


    return (
        <>
            <div className="home-split">
                <div className="header">
                <Header />
                </div>
                <div className="links">
                    <Links />
                </div>
                <div className="about" >
                    <About/>
                </div>
                <div className="drawer">
                    <MyDrawer />
                </div>

            </div>
        </>
    )
}
export default Home