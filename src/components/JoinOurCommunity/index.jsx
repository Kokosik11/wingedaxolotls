import React from 'react';
import "./style.css";

const JoinOurCommunity = props => {
    const componentClass = props.className || "community"
    
    return (
        <section className={componentClass}>
            <h2>Join our community</h2>
        </section>
    )
} 

export default JoinOurCommunity;