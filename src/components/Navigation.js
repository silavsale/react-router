import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>

            <p><a href="About.js">About</a>
                <a href="Contact.js">Contact</a>
                <a href="Home.js">Home</a></p>
        </div>
    )
};

export default Navigation;
