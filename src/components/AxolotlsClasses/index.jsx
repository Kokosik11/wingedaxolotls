import React, {useEffect, useState} from 'react';
import "./style.css";

import Arch from "../../assets/slider/arch.jpg";
import AxoBut from "../../assets/slider/axo-but.jpg";
import Demon from "../../assets/slider/demon.jpg";
import Dragonfly from "../../assets/slider/dragonfly.jpg";
import Drakonid from "../../assets/slider/drakonid.jpg";
import Angelic from "../../assets/slider/axolotl1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation"

import SwiperCore, {
    Autoplay, Navigation,
} from 'swiper';

SwiperCore.use([Autoplay, Navigation]);

const data = [
    {
        img: Drakonid,
        title: "Draconid",
        description: "Draconic axolotls which settled on Dravolinn - a harsh, unsightly continent are known for their high endurance and extreme resistance to the external environment that serves as their home. Their bodies covered with strong scales and the membranous wings are crowned with sharp tips on the lunges."
    },
    {
        img: Demon,
        title: "Demonic",
        description: "Demonic axolotls partly resemble their Draconid counterparts with with curve membranous wings topped with single spikes but their appearance is deceiving - their wings are smaller, swing more often and their temper is more cunning. Most of them are loners however there are also collective representations with a clear hierarchy which is due to their habitat - the entire Fiends-Islands Archipelago full of countless mountain ranges belongs to these creatures."
    },
    {
        img: Angelic,
        title: "Angelic",
        description: "For Angelic axolotls the sandy white, yellow and pebble shores of New-Angeles washed by warm currents have become a resort. Spending most of the time on pearl-colored stones near the water these axolotls are remarkable for the structure of their body - the feathered compact wings easily fold into a dorsal fold and their body extremely flexible and smooth is capable of emitting a barely noticeable whitish light in the dark."
    },
    {
        img: Arch,
        title: "Archangel",
        description: "Thousands of mountain needles piercing the skies over New-Angeles have become the habitat of the Archangel axolotls. The older brothers unlike their coastal relatives prefer the height of the mountains and the peace of ancient rocks. Their impressive wings consisting of large feathers warm their owners in bad weather and their bloom scales sharp like local stones reliably protect from any external influences. Like their \"down-to-earth\" colleagues the bodies of these majestic creatures are capable of emitting light that comes out in concentrated clots from under the scales."
    },
    {
        img: AxoBut,
        title: "Butterfly",
        description: "New Eden is divided along the equator by the Keirrat Desert, its northern part belongs to the Butterfly axolotls which bask in the warm vast plains and green hills. The inhabitants of the north are free, graceful and unhurried. Their beautiful lamellar wings the largest among relatives are divided in pairs and the body is covered with crystalline nectar scales that shoot glare in the sun."
    },
    {
      img: Angelic,
      title: "Dragonite",
      description: 'The south of New Eden full of impassable jungles and tropical swamps with rare hills of land sheltered the Dragonite axolotls. In response the southern cousins   of Butterfly axolotls due to the two pairs of fastest monoplastic wings can boast of the highest speed and mobility which is undoubtedly due to their rapidly changing habitat conditions. As for the cover the bodies of the Dragonites are as smooth as possible in order to have maximum permeability in a tropical windbreak and the wings are covered with a repulsive gel that allows you to reject foreign particles and keep the wings always in perfect cleanliness.'
    }

]

const AxolotlsClasses = props => {
    const componentClass = props.className || "axolotls-classes"

    return (
        <section className={componentClass} id={'axolotlsClasses'}>
            <div className={componentClass+"_wrapper"}>
                <h2><span className="gradient-purple">Axolotls</span> classes</h2>
                
                <Swiper
                    slidesPerView={3}  
                    direction={'vertical'}
                    loop={true} 
                    autoplay={{
                        "delay": 10000,
                        "disableOnInteraction": false
                    }}
                    navigation={true}
                    allowTouchMove={false}
                    className="mySwiperClasses"
                >
                    {data.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img src={slide.img} alt={slide.title} />
                            <div className="slide-content">
                                <h3>{slide.title}</h3>
                                <div>{slide.description}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
} 

export default AxolotlsClasses;