import React, { useState } from 'react';
import "./style.css";

import Logo from "../../assets/logo.png";
import Twitter from "../../assets/twitter.svg";
import Wallet from "../../assets/wallet.svg";
import Burger from "../../assets/burger.svg";

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


    const mainContent = <LinkGroup className={componentClass+"_links"}>
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

    const loreContent = <LinkGroup className={componentClass+"_links"}>
      <Link
        activeClass="active"
        to="mission"
        spy={true}
        smooth={true}
        offset={-140}
        duration={500}
        className={componentClass + "_link"}
      >
        <div onClick={() => props.setIsLorePage(false)}>{'Back'}</div>
      </Link>
      <Link
        activeClass="active"
        to="mission"
        spy={true}
        smooth={true}
        offset={-140}
        duration={500}
        className={componentClass + "_link"}
      >
        <div>{'Daily Notes'}</div>
      </Link>
      <Link
        activeClass="active"
        to="axolotlsClasses"
        spy={true}
        smooth={true}
        offset={-140}
        duration={500}
        className={componentClass + "_link"}
      >
        <div onClick={() => props.setIsClassesPage(true)}>{'Classes'}</div>
      </Link>
    </LinkGroup>

  const classesContent = <LinkGroup className={componentClass+"_links"}>
    <Link
      activeClass="active"
      to="mission"
      spy={true}
      smooth={true}
      offset={-140}
      duration={500}
      className={componentClass + "_link"}
    >
      <div onClick={() => props.setIsClassesPage(false)}>{'Back'}</div>
    </Link>
  </LinkGroup>

  const notesContent = <LinkGroup className={componentClass+"_links"}>
    <Link
      activeClass="active"
      to="mission"
      spy={true}
      smooth={true}
      offset={-140}
      duration={500}
      className={componentClass + "_link"}
    >
      <div onClick={() => props.setIsNotesPage(false)}>{'Back'}</div>
    </Link>
  </LinkGroup>

  const mainSecond = <>
    <a className={'twitter-icon'} target={'_blank'} href="https://twitter.com/wingedaxolotls"><span className={componentClass+"_social-text"}>Twitter</span><img src={Twitter} alt="Icon: Twitter icon"/></a>
    <button className={'wallet-icon'}><span className={componentClass+"_social-text"}>Wallet</span><img src={Wallet} alt="Icon: Wallet icon"/></button>
  </>

  const loreSecond = <LinkGroup className={componentClass+"_links_mobile"}>
    <Link
      to="mission"
      spy={true}
      smooth={true}
      offset={-140}
      duration={500}
      className={componentClass + "_link"}
    >
      <div onClick={() => props.setIsLorePage(false)}>{'Back'}</div>
    </Link>
    <Link
      activeClass="active"
      to="mission"
      spy={true}
      smooth={true}
      offset={-140}
      duration={500}
      className={componentClass + "_link"}
    >
      <div onClick={() => props.setIsNotesPage(true)}>{'Daily Notes'}</div>
    </Link>
    <Link
      activeClass="active"
      to="axolotlsClasses"
      spy={true}
      smooth={true}
      offset={-140}
      duration={500}
      className={componentClass + "_link"}
    >
      <div onClick={() => props.setIsClassesPage(true)}>{'Classes'}</div>
    </Link>
  </LinkGroup>

  const classesSecond = <LinkGroup className={componentClass+"_links_mobile"}>
    <Link
      activeClass="active"
      to="mission"
      spy={true}
      smooth={true}
      offset={-140}
      duration={500}
      className={componentClass + "_link-classes-back"}
    >
      <div onClick={() => props.setIsClassesPage(false)}>{'Back'}</div>
    </Link>
  </LinkGroup>

  const notesSecond = <LinkGroup className={componentClass+"_links_mobile"}>
    <Link
      activeClass="active"
      to="mission"
      spy={true}
      smooth={true}
      offset={-140}
      duration={500}
      className={componentClass + "_link-classes-back"}
    >
      <div onClick={() => props.setIsNotesPage(false)}>{'Back'}</div>
    </Link>
  </LinkGroup>

  let headerContent;
  let secondContent;
  switch (props.page) {
    case 'main': {
      headerContent = mainContent;
      secondContent = mainSecond;
      break;
    }
    case 'lore': {
      headerContent = loreContent;
      secondContent = loreSecond;
      break;
    }
    case 'classes': {
      headerContent = classesContent;
      secondContent = classesSecond;
      break;
    }
    case 'notes': {
      headerContent = notesContent;
      secondContent = notesSecond;
      break;
    }
    default: {
      headerContent = mainContent;
      secondContent = mainSecond;
      break;
    }
  }

    return (
        <header className={componentClass}>
            <div className={componentClass+"_content"}>
              {
                props.page === 'main' &&
                <div className={componentClass+"_nav"}>
                  <img src={Logo} alt="Image: logo" />
                  { headerContent }
                </div>
              }
                <div className={componentClass+"_social-links"}>
                  { secondContent }
                    {!props.isLorePage &&
                    <div onClick={handleBurgerClick} className={componentClass + "_burger"}>
                      <img className={isBurgerOpened ? 'is-close hide' : 'is-closed'} src={Burger}
                           alt="Icon: Burger icon"/>
                    </div>
                    }
                </div>
                {
                  <div className={isBurgerOpened ? `${componentClass}_burger-content` : `${componentClass}_burger-content hide`}>
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
                      <div onClick={() => {
                        props.setIsLorePage(false)
                        setBurgerOpened(false)
                      }}>{'Mission'}</div>
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
                        <div onClick={() => {
                          props.setIsLorePage(false)
                          setBurgerOpened(false)
                        }}>{'Roadmap'}</div>
                      </Link>
                      <Link
                        activeClass="active"
                        to="faq"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className={componentClass+"_link"}
                      >
                        <div onClick={() => {
                          props.setIsLorePage(false)
                          setBurgerOpened(false)
                        }}>{'FAQ'}</div>
                      </Link>
                      <Link className={props.isLorePage ? componentClass+"_link active" : componentClass+"_link"}>
                        <div onClick={() => {
                          props.setIsLorePage(true)
                          setBurgerOpened(false)
                        }}>{'Lore'}</div>
                      </Link>
                    </LinkGroup>
                </div>
                }
            </div>
        </header>
    )
} 

export default Header;