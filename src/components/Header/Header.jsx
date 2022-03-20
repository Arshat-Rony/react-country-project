import React from 'react';
import './Header.css'

const Header = (props) => {
    const { count } = props;
    return (
        <div>
            <header>
                <nav className='d-flex justify-content-between align-items-center pt-2 container'>
                    <div className="logo">
                        <a className='fw-bold fs-2' href="#">Eshop</a>
                    </div>
                    <div className="menu">
                        <a className='d-inline-block me-3' href="#">Home</a>
                        <a className='d-inline-block me-3' href="#">About</a>
                        <a className='d-inline-block me-3' href="#">Contact</a>
                        <a className='d-inline-block me-3' href="#">Cart <sup className='badge bg-danger'>{count}</sup></a>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;