import React from 'react';
import "./style.css";

import logo from '../../assets/footer/logo.png';
import discord from '../../assets/footer/discord.png';
import twitter from '../../assets/footer/twitter.png';

const Footer = props => {
    const componentClass = props.className || "footer"
    
    return (
      <footer className={componentClass}>
        <div className={`${componentClass}_wrapper`}>
          <div className={`${componentClass}_logo`}><img src={logo} alt={'axolotl-logo'} /><span>{'Axolotls NFT'}</span></div>
          <div className={`${componentClass}_text`}>{'5000 unique Axolotls that need owners'}</div>
          <div className={`${componentClass}_links`}>
            <a target={'_blank'} href={'https://discord.gg/4qXGtuVWvk'}><img src={discord} alt={'discord'} /></a>
            <a target={'_blank'} href={'https://twitter.com/wingedaxolotls'}><img src={twitter} alt={'twitter'} /></a>
          </div>
        </div>
      </footer>
    )
} 

export default Footer;