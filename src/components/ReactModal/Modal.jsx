import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './Modal.css'
import BuyModal from '../BuyModal/BuyModal';

const ReactModal = (props) => {

    const { image, title, description, price, rating } = props.product;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <a href='#' variant="primary" onClick={handleShow}>
                Details
            </a>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-center mt-3'>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>
                    <img className='w-50 mx-auto my-5' src={image} alt="" />
                    <h5><span className='fs-3 fw-bold pt-3'>Price : </span> {price} $</h5>
                    <p><span className='fs-3 fw-bold'>Short Description : </span>{description}</p>
                    <p className='fs-3 fw-bold'>Rating :  {rating.rate}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='none' target='_blank'>
                        <BuyModal></BuyModal>
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ReactModal;