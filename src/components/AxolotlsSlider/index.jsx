import React from 'react';
import "./style.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination"

import SwiperCore, {
    Autoplay,
    Pagination, 
} from 'swiper';

SwiperCore.use([Autoplay, Pagination]);

import Arch from "../../assets/slider/arch.jpg";
import AxoBut from "../../assets/slider/axo-but.jpg";
import Axolotl1 from "../../assets/slider/axolotl1.jpg";
import Axolotl4 from "../../assets/slider/axolotl4.jpg";
import Demon from "../../assets/slider/demon.jpg";
import Dragonfly from "../../assets/slider/dragonfly.jpg";
import Drakonid from "../../assets/slider/drakonid.jpg";

const sliderImgs = [ Arch, AxoBut, Axolotl1, Axolotl4, 
                    Demon, Dragonfly, Drakonid ];

const AxolotlsSlider = props => {
    const componentClass = props.className || "axolotls-slider"
    
    console.log(sliderImgs)

    return (
        <section className={componentClass}>
            <div className={componentClass+"_wrapper"}>
                <h2>5, 000 <span className="gradient-purple">unique Axolotls</span>, here are a few</h2>
            
                <Swiper 
                    slidesPerView={3} 
                    spaceBetween={3} 
                    pagination={{ "clickable": true }} 
                    loop={true} 
                    autoplay={{
                        "delay": 6000,
                        "disableOnInteraction": false
                    }}
                    className="mySwiper"
                >
                    {sliderImgs.map((slide, index) => (
                        <SwiperSlide key={index}><img src={slide} alt={`Slide image ${index+1}`} /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
} 

export default AxolotlsSlider;