import React from 'react'
import { elastic as Menu } from "react-burger-menu";

export const SidebarCustom = (props) => {
    return (
        <div>
            <Menu right {...props}>
                <a className="menu-item" href="/">
                    Home
                </a>

                <a className="menu-item" href="/about">
                    About
                </a>

                <a className="menu-item" href="/services">
                    Services
                </a>

                <a className="menu-item" href="/contact">
                    Contact us
                </a>
            </Menu>
        </div>
    )
}
