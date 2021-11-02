import React, { useState, useEffect } from 'react';
import "./style.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination"

import SwiperCore, {
    Autoplay,
    Pagination, 
} from 'swiper';

SwiperCore.use([Autoplay, Pagination]);

import One from "../../assets/slider/1.jpg";
import Two from "../../assets/slider/2.jpg";
import Three from "../../assets/slider/3.jpg";
import Four from "../../assets/slider/4.jpg";
import Five from "../../assets/slider/5.jpg";

const sliderImgs = [ One, Two, Three, Four, Five ];

const AxolotlsSlider = props => {
    const componentClass = props.className || "axolotls-slider"

    const [slidesPerView, setSlidesPerView] = useState(3);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        if(windowWidth > 667) setSlidesPerView(3);
        if(windowWidth <= 667) setSlidesPerView(2);
        if(windowWidth <= 447) setSlidesPerView(1);
    }, [windowWidth])

    const handleWindowResize = (e) => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    return (
        <section className={componentClass}>
            <div className={componentClass+"_wrapper"}>
                <h2>5000 <span className="gradient-purple">unique Axolotls</span>, here are a few</h2>
            
                <Swiper 
                    slidesPerView={slidesPerView} 
                    pagination={{ "clickable": true }} 
                    loop={true} 
                    autoplay={{
                        "delay": 3000,
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