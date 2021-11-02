import React from 'react';
import "./style.css";

import Logo from "../../assets/logo.png";
import Twitter from "../../assets/twitter.svg";
import Wallet from "../../assets/wallet.svg";

import { Link } from "react-scroll";

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
                  {props.isLorePage ? <div className={`${componentClass}_back-link`} onClick={() => props.setIsLorePage(false)}>{'Back'}</div> :
                    <LinkGroup className={componentClass+"_links"}>
                      <Link
                        activeClass="active"
                        to="mission"
                        spy={true}
                        smooth={true}
                        offset={-140}
                        duration={500}
                        className={componentClass + "_link"}
                      >
                        <div onClick={() => props.setIsLorePage(false)}>{'Mission'}</div>
                      </Link>
                        <Link
                          className={componentClass+"_link"}
                          activeClass="active"
                          to="roadmap"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          <div onClick={() => props.setIsLorePage(false)}>{'Roadmap'}</div>
                        </Link>
                        <Link
                          activeClass="active"
                          to="faq"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          className={componentClass+"_link"}
                        >
                         <div onClick={() => props.setIsLorePage(false)}>{'FAQ'}</div>
                        </Link>
                        <Link className={props.isLorePage ? componentClass+"_link active" : componentClass+"_link"}>
                          <div onClick={() => props.setIsLorePage(true)}>{'Lore'}</div>
                        </Link>
                    </LinkGroup>
                  }
                </div>

                <div className={componentClass+"_social-links"}>
                    <a target={'_blank'} href="https://twitter.com/wingedaxolotls">Twitter <img src={Twitter} alt="Icon: Twitter icon"/></a>
                    <button>Wallet <img src={Wallet} alt="Icon: Wallet icon"/></button>
                </div>
            </div>
        </header>
    )
} 

export default Header;