import React, {useEffect} from 'react';
import "./style.css";

import Arch from "../../assets/slider/arch.jpg";
import AxoBut from "../../assets/slider/axo-but.jpg";
import Demon from "../../assets/slider/demon.jpg";
import Dragonfly from "../../assets/slider/dragonfly.jpg";
import Drakonid from "../../assets/slider/drakonid.jpg";

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
        title: "Drakonid",
        description: "Draconidal Axolotls, settled on Dravolinn, a harsh, unsightly continent, are known for their high stamina and extreme resistance to the effects of the environment that serves them as their home. The bodies of this genus are covered with strong scales, and the webbed wings are topped with sharp tips on the lashes."
    },
    {
        img: Arch,
        title: "Arch",
        description: "Thousands of needles from the mountains that pierce the skies over New Angels have become habitats of Archangel Axolotes. Older brothers, unlike their coastal relatives, prefer mountain heights and the peace of ancient rocks. Their formidable wings, consisting of large feathers, warm their masters in the storm and the blog scale, as sharp as the stones here, securely protects against any external influences. As with \"down-to-earth\" colleagues, the bodies of these majestic creatures are capable of emitting light from concentrated clumps under the scales"
    },
    {
        img: AxoBut,
        title: "Axo But",
        description: "The new Eden is divided into the equator of the Cape Desert, the northern part of which is owned by the Butterfly Axolotel, which is threatened by warm, vast plains and green hills. The inhabitants of the north are free, graceful, and slow. Their beautiful flannel wings, the biggest among their kin, have a pairwise separation, and the body is coated with crystalline nectar scales that shoot glare in the sun"
    },
    {
        img: Demon,
        title: "Demon",
        description: "The demonic axolotes are somewhat reminiscent of their Draconian brethren by the bends of their webbed wings, surmounted also by single thorns, but the appearance is deceptive - their wings are smaller, mach more often, and their temper is cunning. Most of them are loners, but they also have collective representation with a clear hierarchy, due to their habitat - the entire Finds Island Archipelago, full of countless mountain ranges, belongs to these creatures."
    },
    {
        img: Dragonfly,
        title: "Dragonfly",
        description: "The South of New Eden, full of unspoiled jungles and tropical swamps with rare land hills, harbored axolotes. The southern brethren of the Butterfly Axolotes can reciprocate with two pairs of the fastest monoplastic wings boast the highest speed and mobility, which undoubtedly, due to their fast-changing habitats. As for the cover, the bodies of the Strekonites are as smooth as possible in order to have maximum permeability in tropical drill conditions, and the wings are covered with a repellent gel allowing to reject foreign particles and keep the wings always in perfect purity."
    },
    {
      img: AxoBut,
      title: "Angelic",
      description: 'For the Angels, the sandy white, yellow, and pebble coasts of New Angels were blessed with warm currents. Spending most of the time on the pearly color of stones near water these axolotes are remarkable for the structure of their body - feathered wings easily fold into the back fold, and their body, extremely flexible and smooth, is able to emit a faint white light in the dark.'
    }

]
const AxolotlsClasses = props => {
    const componentClass = props.className || "axolotls-classes"
    return (
        <section className={componentClass}>
            <div className={componentClass+"_wrapper"}>
                <h2><span className="gradient-purple">Axolotls</span> classes</h2>
                <Swiper 
                    slidesPerView={3}  
                    direction={'vertical'}
                    loop={true} 
                    navigation={true}
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