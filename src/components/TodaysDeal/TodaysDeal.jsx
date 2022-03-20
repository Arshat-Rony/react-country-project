import React from 'react';
import dealImg from '../Images/image-removebg-preview (11).png'
import './TodaysDeal.css'

const TodaysDeal = () => {
    return (
        <div data-aos='fade-up' className='deal-section mt-5'>
            <div className='deal container py-5 d-flex flex-column flex-md-row justify-content-center align-items-center'>
                <img className='d-block w-50  deal-img' src={dealImg} alt="" />
                <div className='deal-text py-5 py-md-0 mt-md-5 text-md-start '>
                    <h2 className='fs-1 fw-bold'>Eshop</h2>
                    <h3 >Best Deal of the Day</h3>
                    <p>Discount up to 50% </p>
                    <button className='deal-btn'>shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default TodaysDeal;