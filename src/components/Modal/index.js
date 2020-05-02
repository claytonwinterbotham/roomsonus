import React, { Fragment } from 'react'
import { Form } from '../Form'
import { ModalWrapper, ModalMainWrapper, ModalHeader, CloseButton } from './Modal.style'
import { FiX } from 'react-icons/fi'

export const Modal = ({
    handleClose,
    show,
    destination,
    setModal,
 }) => {

    const formattedLocationElement = 
        (destination.location === destination.country_name) 
        ? <span>{destination.location}</span> 
        : <Fragment><span>{destination.location}</span> , <span>{destination.country_name}</span></Fragment>

    return (
        <ModalWrapper show={show}>
            <ModalMainWrapper>
                <ModalHeader><p>Please fill out the form below to recieve your voucher for {formattedLocationElement} .</p></ModalHeader>
                <Form destination={destination} />
                <CloseButton onClick={handleClose}><FiX /></CloseButton>
            </ModalMainWrapper>
        </ModalWrapper>
    )
}