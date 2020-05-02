import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const Hero = styled(BackgroundImage)`
    position: relative;
    width: 100%;
    height: 70vh;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
    background-color: #fff200;
    display: flex;
    align-items: center;

`

export const HeroContent = styled.div`
    width: 50%;
    margin: 0 auto;
    color: #fff;
    & > h1 {
        text-align: center;
        font-size: 60px;
        line-height: 1.4;
        font-weight: 700;
        & > span {
            border-bottom: 10px solid #e74c3c;
        }
    }
    z-index: 999;
`

export const HeroOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
`

