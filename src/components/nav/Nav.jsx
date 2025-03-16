import React, { useRef } from "react";
import navCss from './../nav/Nav.module.css'

function Nav () {

    const menu = useRef();

    const menuhandler = () => {
        menu.current.classList.toggle(navCss.openMenu);
    }

    return (
        <div className={navCss.nav}>
            <div className={navCss.logo}>
                <a href="#">Luthfi ND</a>
            </div>

        <ul ref={menu}>
            <li><a href="#Home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#Experience">Experience</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contacts">Contact</a></li>
        </ul>

        <i className="ri-menu-4-line" id={navCss.bars} onClick={menuhandler}></i>
            
        </div>
    )
}

export default Nav;