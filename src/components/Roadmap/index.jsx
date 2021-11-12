import React from 'react';
import "./style.css";

import sphere from '../../assets/sphere.png';

const roadmapItems = [
  {
    id: '.01',
    title: 'Foundation',
    text: ['Promotion of our first collection “Winged Axolotls”', 'Create a deep lore of our universe, comics and art', 'Community building.'],
  },
  {
    id: '.02',
    title: 'Lore detailing',
    text: ['Adding the possibility of breeding', 'And also subsequent collections for expanding our world', 'Collaboration with authors of other collections', 'We will take any opportunity to make it the most complex and interesting universe from all  NFT projects'],
  },
  {
    id: '.03',
    title: 'Giving the love back',
    text: 'Because of you we can make our projects and develop our universe! So we want to return some love to you! First of all there will be drops for holder of a special collection (Baby Axolotls), also there will be giveaways for holders which contains our merch, as well as white priority list for our next collection.',
  },
  {
    id: '.04',
    title: 'IRL Part',
    text: 'Introduce our collection to the real world. models for 3d printing, books, comics based on our universe, merch and a 2d short cartoon.',
  }
]

const RoadmapItem = ({id, title, text}) => {
  const componentClass = 'roadmap-item';

  return (
    <div className={componentClass} id={componentClass}>
      <div className={`${componentClass}_top-line`} />
      <div className={id === '.04' ? `${componentClass}_bottom-line_last` : `${componentClass}_bottom-line`} />
      <img src={sphere} alt={'sphere'} className={`${componentClass}_sphere`} />
      <div className={`${componentClass}_title`}>
        <span className={`${componentClass}_id`}>{id}</span>
        {title}
      </div>
      <div className={`${componentClass}_text`}>{Array.isArray(text) ? text.map(item => <><span>{item}</span></>) : text}</div>
    </div>
  )
}

const Roadmap = props => {
    const componentClass = props.className || "roadmap"
    
    return (
        <section className={componentClass}>
          <div className={`${componentClass}_wrapper`}>
            <div className={`${componentClass}_title`}>{'Roadmap'}</div>
            <div className={`${componentClass}_content`}>
              {roadmapItems.map((item) => <RoadmapItem key={item.id.toString()} id={item.id} title={item.title} text={item.text} />)}
            </div>
          </div>
        </section>
    )
} 

export default Roadmap;