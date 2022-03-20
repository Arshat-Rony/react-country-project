import React from 'react';
import "./About.css"
import aboutImg from "../Images/img1-removebg-preview.png"

const About = () => {
    return (
        <div data-aos='fade-up' className='about-section'>
            <div className='about container py-5 d-flex flex-column flex-md-row justify-content-center align-items-center'>
                <img className='d-block w-50 flex-1about-img' src={aboutImg} alt="" />
                <div className='about-text py-5 py-md-0 mt-md-5 text-md-start '>
                    <h2 className='fs-1 fw-bold'>Eshop</h2>
                    <h3 >Shop with us Enojoy your day</h3>
                    <p>We have started our journey since 1929.Our customers are happy with our product. Our shop delivery system better than others and we offer same money to the customer for their return product </p>
                    <button className='about-btn'>Explore more </button>
                </div>
            </div>
        </div>
    );
};

export default About;