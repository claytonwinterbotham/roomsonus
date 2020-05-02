import React from "react"
import { StyledVideo, VideoWrapper } from './Video.style'

export const Video: React.FunctionComponent = () => (
    <VideoWrapper>
        <StyledVideo loop={true} autoPlay={true}>
            <source src='http://res.cloudinary.com/dy3c6sc72/video/upload/v1588443452/1012812872-sd_czn9g2.mov' />
        </StyledVideo>
    </VideoWrapper>  
)