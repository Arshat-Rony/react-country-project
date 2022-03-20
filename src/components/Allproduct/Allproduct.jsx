import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Allproduct = (props) => {
    const { setCart } = props;
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='mt-5'>
            <h1 >Allprduct</h1>
            <div className='row mx-auto container mt-5'>
                {
                    products.map(product => <Product product={product} setCart={setCart} id={product.id}></Product>)
                }
            </div>
        </div>
    );
};

export default Allproduct;