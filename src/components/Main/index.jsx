import React from 'react';
import "./style.css";

import gif from '../../assets/gif.gif';
import connectWallet from '../../assets/main-svgs/connectWallet.svg';

const Main = props => {
    const componentClass = props.className || "main"
    
    return (
        <section className={componentClass}>
          <div className={`${componentClass}_wrapper`}>
            <div className={`${componentClass}_content`}>
              <div className={`${componentClass}_content-text`}>
                <h1>
                  <span className="gradient-purple">{'5000 unique Axolotls'}</span>
                  <br/> {'that need owners'}
                </h1>
                <span className={`${componentClass}_content_mainText`}>{'The Winged Axolotls is a NFT collection of 3333 unique Axolotls inspired by our Axoverse. Each axolotl has its own unique trait, and also belongs to one of 6 classes.'}</span>
              </div>
              <div className={`${componentClass}_gif`}>
                <img src={gif} alt={'axolotls-gif'} />
              </div>
            </div>
            <div className={`${componentClass}_connect-wallet`}>
              <span>{'Connect a wallet'}</span>
              <img src={connectWallet} alt={'connect wallet'}/>
            </div>
          </div>
        </section>
    )
} 

export default Main;