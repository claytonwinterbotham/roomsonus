import React from 'react'
import { StyledContainer } from './Container.style'


type ContainerProps = {
    children: React.ReactNode   
}


export const Container: React.FunctionComponent<ContainerProps> = ({
    children
}) => {
    return(
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}
