import React from 'react';
import img from '../Images/Green Classroom Blackboard Zoom Virtual Background (1920 × 1000 px).jpg'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <img className='hero-img' src={img} alt="" />
            <button className='hero-btn'>Buy now</button>
        </div>
    );
};

export default Hero;