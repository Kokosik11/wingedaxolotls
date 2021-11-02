import React, {useState} from 'react';
import "./style.css";

import Logo from "../../assets/logo.png";
import Twitter from "../../assets/twitter.svg";
import Wallet from "../../assets/wallet.svg";
import Burger from "../../assets/burger.svg";
import Close from "../../assets/close.svg";

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
    const componentClass = props.className || "header";

    const [isBurgerOpened, setBurgerOpened] = useState(false);

    const handleBurgerClick = () => {
      setBurgerOpened(isBurgerOpened => !isBurgerOpened);
    } 
    
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
                    <a target={'_blank'} href="https://twitter.com/wingedaxolotls"><span className={componentClass+"_social-text"}>Twitter</span><img src={Twitter} alt="Icon: Twitter icon"/></a>
                    <button><span className={componentClass+"_social-text"}>Wallet</span><img src={Wallet} alt="Icon: Wallet icon"/></button>
                    <div onClick={handleBurgerClick} className={componentClass+"_burger"}>
                      {!isBurgerOpened && (
                        <img className="is-closed" src={Burger} alt="Icon: Burger icon" />
                      ) || (
                        <img className="is-opened" src={Close} alt="Icon: Close icon" />
                      )
                      }
                    </div>
                </div>

                {isBurgerOpened && 
                  <div className={componentClass+"_burger-content"}>
                  <LinkGroup className={componentClass+"_burger-links"}>
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
                </div>
                }
            </div>
        </header>
    )
} 

export default Header;