import React from 'react';
import "./style.css";

const Faq = props => {
    const componentClass = props.className || "faq"
    
    return (
        <section className={componentClass}>
            <h2>FAQ</h2>
        </section>
    )
} 

export default Faq;