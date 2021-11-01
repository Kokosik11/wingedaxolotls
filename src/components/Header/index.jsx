import React from 'react';
import "./style.css";

const Header = props => {
    const componentClass = props.className || "header"
    
    return (
        <header className={componentClass}>
            <h3>It's header</h3>
        </header>
    )
} 

export default Header;