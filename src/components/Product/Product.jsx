
import React, { } from 'react';
import ReactModal from '../ReactModal/Modal';
import './Product.css'


const Product = (props) => {
    const { setCart } = props;
    const { product } = props;
    const { image, title, id } = props.product;
    return (
        <div data-aos='fade-up' className='card col-lg-4 col-md-6 p-4 ' id={id}>
            <h2 className='mb-3'>{title.slice(0, 11)}</h2>
            <img className='w-50 mx-auto img' src={image} alt="" />
            <div className='d-flex justify-content-between align-items-center mt-4'>
                <a href="#" onClick={setCart}>Add to cart</a>

                {<ReactModal product={product}></ReactModal>}
            </div>
        </div>
    )
};

export default Product;