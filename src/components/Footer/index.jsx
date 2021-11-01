import React from 'react';
import "./style.css";

const Footer = props => {
    const componentClass = props.className || "footer"
    
    return (
        <footer className={componentClass}>
            <h3>Axolotls NFT</h3>
        </footer>
    )
} 

export default Footer;