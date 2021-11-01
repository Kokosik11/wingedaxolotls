import React from 'react';
import "./style.css";

import Logo from "../../assets/logo.png";
import Twitter from "../../assets/twitter.svg";
import Wallet from "../../assets/wallet.svg";

const Link = props => <li className={props.className || null}><a href={props.to}>{props.children}</a></li>

const LinkGroup = props => {
    return (
        <nav className={props.className || null}>
            <ul>
                {props.children}
            </ul>
        </nav>
    )
}

const Header = props => {
    const componentClass = props.className || "header"
    
    return (
        <header className={componentClass}>
            <div className={componentClass+"_content"}>
                <div className={componentClass+"_nav"}>
                    <img src={Logo} alt="Image: logo" />

                    <LinkGroup className={componentClass+"_links"}>
                        <Link className={componentClass+"_link active"} to="#">Mission</Link>
                        <Link className={componentClass+"_link"} to="#">Roadmap</Link>
                        <Link className={componentClass+"_link"} to="#">Lore</Link>
                        <Link className={componentClass+"_link"} to="#">FAQ</Link>
                    </LinkGroup>
                </div>

                <div className={componentClass+"_social-links"}>
                    <a href="#">Twitter <img src={Twitter} alt="Icon: Twitter icon"/></a>
                    <button>Wallet <img src={Wallet} alt="Icon: Wallet icon"/></button>
                </div>
            </div>
        </header>
    )
} 

export default Header;