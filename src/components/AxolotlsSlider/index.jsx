import React from 'react';
import "./style.css";

const AxolotlsSlider = props => {
    const componentClass = props.className || "axolotls-slider"
    
    return (
        <section className={componentClass}>
            <h2>5, 000 <span className="gradient-purple">unique Axolotls</span>, here are a few</h2>
        </section>
    )
} 

export default AxolotlsSlider;