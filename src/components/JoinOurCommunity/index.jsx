import React from 'react';
import "./style.css";

import logo from '../../assets/community/logo.png';
import discord from '../../assets/community/discord.svg';

const JoinOurCommunity = props => {
    const componentClass = props.className || "community"
    
    return (
        <section className={componentClass}>
            <div className={`${componentClass}_wrapper`}>
              <div className={`${componentClass}_text-content`}>
                <div className={`${componentClass}_title`}>{'Join our community'}</div>
                <div className={`${componentClass}_text`}>
                  {'Axolotls Discord already started and waiting for new AXO Owners! If you want to join the #Axoverse it’s here. Join our Discord to get the news as soon as possible !'}
                </div>
                <div className={`${componentClass}_join-btn`}>
                  <a target={'_blank'} href={'https://discord.gg/4qXGtuVWvk'}><span>{'Join community'}</span></a>
                  <img src={discord} alt={'discord'} />
                </div>
              </div>
              <div className={`${componentClass}_logo`}>
                <img src={logo} alt={'community-logo'}/>
              </div>
            </div>
        </section>
    )
} 

export default JoinOurCommunity;