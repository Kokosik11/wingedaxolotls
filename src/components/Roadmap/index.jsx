import React from 'react';
import "./style.css";

import sphere from '../../assets/sphere.png';

const roadmapItems = [
  {
    id: '.01',
    title: 'Current project',
    text: 'Currently, we are working on raising the quality of our first collection. We have already gone through a lot of iterations but we want to achieve quality standards that are undoubted can be named as one of the best in the NFT community. We are also working on expanding our community by marketing and improving social media presence as well as content quality. The drop release date will be announced as soon as we will be satisfied with the level of product.',
  },
  {
    id: '.02',
    title: 'Expand and progress',
    text: 'We don’t want our universe to be a place only fo one collection. For this goal to be achieved we will expand it and add lore to all the details. And then we will develop it with breeding activity for axolotls and subsequent collection fitting in our world. We will take any opportunity to make it the most complex and interesting universe from all of the NFT. We also seeking to engage with different artist for cross-world integrations.',
  },
  {
    id: '.03',
    title: 'Giving the love back',
    text: 'Because of you we can make our projects and develop our universe! So we want to return some love to you! First of all there will be drops for holder of a special collection (Baby Axolotls), also there will be give away for holders which contains our merch, as well as white priority list for our next collection.',
  },
  {
    id: '.04',
    title: 'IRL Part',
    text: 'We want our creation to be present not only in the digital world but also to be physically present around our clients. We will achieve such a tusk by introducing 3D models and also creating our own book and comics based on our universe. Also, merchandise will be created as a part of our project of giving value back to our holders.',
  }
]

const RoadmapItem = ({id, title, text}) => {
  const componentClass = 'roadmap-item';

  return (
    <div className={componentClass}>
      <div className={`${componentClass}_top-line`} />
      <div className={`${componentClass}_bottom-line`} />
      <img src={sphere} alt={'sphere'} className={`${componentClass}_sphere`} />
      <div className={`${componentClass}_title`}>
        <span className={`${componentClass}_id`}>{id}</span>
        {title}
      </div>
      <div className={`${componentClass}_text`}>{text}</div>
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
              {roadmapItems.map((item) => <RoadmapItem id={item.id} title={item.title} text={item.text} />)}
            </div>
          </div>
        </section>
    )
} 

export default Roadmap;