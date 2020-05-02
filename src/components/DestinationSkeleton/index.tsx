import React from 'react';
import { DestinationWrapper, DestinationContentWrapper, DestinationImageWrapper, DestinationButton } from '../Destination/Destination.style'
import Skeleton from 'react-loading-skeleton'


export const DestinationSkeleton: React.FunctionComponent = ({
}) => {
    return (
        <DestinationWrapper>
            <DestinationImageWrapper>
                <Skeleton
                    width={525}
                    height={295}
                />
            </DestinationImageWrapper>
            <div>
                <Skeleton
                    width={480}
                    height={500}
                />
            </div>
        </DestinationWrapper>
    )
}