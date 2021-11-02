import React from 'react';
import "./style.css";

const AxolotlsClasses = props => {
    const componentClass = props.className || "axolotls-classes"
    
    return (
        <section className={componentClass}>
            <div className={componentClass+"_wrapper"}>
                <h2><span className="gradient-purple">Axolotls</span> classes</h2>

                <div className={componentClass+"_circle-carousel"}>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </div>
        </section>
    )
} 

export default AxolotlsClasses;