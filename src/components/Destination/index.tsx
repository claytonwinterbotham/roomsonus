import React, { useState } from 'react';
import { DestinationWrapper, DestinationContentWrapper, DestinationImageWrapper, DestinationButton } from './Destination.style'
import { Modal } from '../Modal'
import Img from 'react-cloudinary-lazy-image'

type DestinationProps = {
    destination: any
} 

export const Destination: React.FunctionComponent<DestinationProps> = ({
    destination
}) => {

    const [modal, setModal] = useState(false)

    const showModal = () => {
        setModal(true)
    }

    const hideModal = () => {
        setModal(false)
    }

    return (
        <DestinationWrapper>
            <DestinationImageWrapper>
                <Img
                    cloudName={'dy3c6sc72'}
                    imageName={destination.imageName}
                    fluid={{
                        maxWidth: 525,
                        height: 295
                    }}
                    urlParams={'g_face,c_lfill'}
                />
            </DestinationImageWrapper>
            <DestinationContentWrapper>
                <h2>{destination.country_name}</h2>
                {destination.country_name != destination.location ? <h3>{destination.location}</h3> : '' }
                <h4>{destination.nights}</h4>
                <ul>
                    <li>Total package value: <span>{destination.total_package_value}</span></li>
                    <li>Activation fee per night: <span>{destination.activation_fee_per_night}</span></li>
                    <li>Total activation cost: <span>{destination.total_activation_cost}</span></li>
                </ul>
                <DestinationButton onClick={showModal}>Get Voucher</DestinationButton>
            </DestinationContentWrapper>
            <Modal 
                show={modal}
                handleClose={hideModal}
                destination={destination}
                setModal={setModal}
            />
        </DestinationWrapper>
    )
}