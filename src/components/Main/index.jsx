import React from 'react';
import "./style.css";

const Main = props => {
    const componentClass = props.className || "main"
    
    return (
        <section className={componentClass}>
            <h2><span className="gradient-purple">5, 000 unique AxolotIs</span> that need owners</h2>
        </section>
    )
} 

export default Main;