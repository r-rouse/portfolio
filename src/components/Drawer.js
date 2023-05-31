import React, { useState } from 'react'
import Drawer from 'react-modern-drawer'
// import 'react-modern-drawer/dist/index.css'
import '../styles/body.css'





export const MyDrawer = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const buttonClassName = isOpen ? "chevron-button-invisible" : "chevron-button";

    return (
        <>
            <button onClick={toggleDrawer} className={`${buttonClassName}`}>&#60;</button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
                overlayClassName="custom-overlay"
            >
                <div className='social-links'>
                    <a href="https://www.linkedin.com/in/randall-rouse/" target="_blank" rel="noopener noreferrer">
                        <img src="https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="LinkedIn" width="30" height="30" />
                    </a>
                    <a href="https://github.com/r-rouse" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" width="30" height="30" />
                    </a>
                </div>

            </Drawer>
        </>
    )
}