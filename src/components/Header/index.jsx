import React from 'react';
import "./style.css";

import Logo from "../../assets/logo.png";

const Header = props => {
    const componentClass = props.className || "header"
    
    return (
        <header className={componentClass}>
            <div className={componentClass+"_nav"}>
                <img src={Logo} alt="Image: logo" />
            </div>
        </header>
    )
} 

export default Header;