import React, {useState} from 'react';
import "./style.css";

import arrow from '../../assets/arrow.svg';

const fqaItems = [
  {
    title: 'How much does an Axolotl cost?',
    text: '0.5 Solana',
  },
  {
    title: 'When Mint?',
    text: 'End November (more info soon)',
  },
  {
    title: 'What is the total supply?',
    text: '5000',
  },
  {
    title: 'Will there be a whitelist?',
    text: 'Yes',
  },
  {
    title: 'Will there be a pre-sale?',
    text: 'Yes, only for whitelist',
  },
  {
    title: 'What is the Winged Axolotls lore about?',
    text: 'The wondrous world of intertwining axolotl variations',
  },
  {
    title: 'How often do you update the lore?',
    text: 'We are working on creating a huge detailed universe, as well as on daily additions',
  },
]

const FaqItem = ({title, text}) => {
  const componentClass = 'faq-item';

  const [expanded, toggleExpand] = useState(false);

  return (
    <div className={componentClass} onClick={() => toggleExpand(!expanded)}>
      <div className={`${componentClass}_header`}>
        <div className={`${componentClass}_title`}>{title}</div>
        <img className={expanded ? `${componentClass}_expand ${componentClass}_expand-open` : `${componentClass}_expand`} src={arrow} alt={'expand'} />
      </div>
      <div className={expanded ? `${componentClass}_text`: `${componentClass}_text-close`}>{text}</div>
    </div>
  )
}

const Faq = props => {
  const componentClass = props.className || "faq"

  return (
    <section className={componentClass} id={componentClass}>
      <div className={`${componentClass}_wrapper`}>
        <h2>{'FAQ'}</h2>
        <div className={`${componentClass}_content`}>
          {fqaItems.map((item) => <FaqItem title={item.title} text={item.text} id={item.title} />)}
        </div>
      </div>
    </section>
  )
}

export default Faq;