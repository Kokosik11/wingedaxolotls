import React from 'react';
import "./style.css";

const AxolotlsClasses = props => {
    const componentClass = props.className || "axolotls-classes"
    
    return (
        <section className={componentClass}>
            <h2><span className="gradient-purple">Axolotls</span> classes</h2>
        </section>
    )
} 

export default AxolotlsClasses;