import React from 'react';
import "./style.css";

const Roadmap = props => {
    const componentClass = props.className || "roadmap"
    
    return (
        <section className={componentClass}>
            <h2>Roadmap</h2>
        </section>
    )
} 

export default Roadmap;