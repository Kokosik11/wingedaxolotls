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
        description: "The poor variety of life coupled with difficult conditions gave rise to this genus of axolotls which are extremely hardy and resistant to external influences. The bodies representative of this genus are covered with strong scales,and the membranous wings are crowned with sharp tips on the lunges."
    },
    {
        img: Arch,
        title: "Arch",
        description: "The poor variety of life coupled with difficult conditions gave rise to this genus of axolotls which are extremely hardy and resistant to external influences. The bodies representative of this genus are covered with strong scales,and the membranous wings are crowned with sharp tips on the lunges."
    },
    {
        img: AxoBut,
        title: "Axo But",
        description: "The poor variety of life coupled with difficult conditions gave rise to this genus of axolotls which are extremely hardy and resistant to external influences. The bodies representative of this genus are covered with strong scales,and the membranous wings are crowned with sharp tips on the lunges."
    },
    {
        img: Demon,
        title: "Demon",
        description: "The poor variety of life coupled with difficult conditions gave rise to this genus of axolotls which are extremely hardy and resistant to external influences. The bodies representative of this genus are covered with strong scales,and the membranous wings are crowned with sharp tips on the lunges."
    },
    {
        img: Dragonfly,
        title: "Dragonfly",
        description: "The poor variety of life coupled with difficult conditions gave rise to this genus of axolotls which are extremely hardy and resistant to external influences. The bodies representative of this genus are covered with strong scales,and the membranous wings are crowned with sharp tips on the lunges."
    }

]

const AxolotlsClasses = props => {
    const componentClass = props.className || "axolotls-classes"
    
    // useEffect(() => {
    //     const swiperSlide = document.querySelectorAll(".swiper-slide");
    //     swiperSlide.forEach(slide => {
    //         slide.onclick = () => {
    //             swiperSlide.forEach(sld => {
    //                 sld.classList.remove("swiper-slide-next")
    //             })

    //             slide.classList.add("swiper-slide-next");
    //         }
    //     })
    // })

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