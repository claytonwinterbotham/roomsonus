import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const Hero = styled(BackgroundImage)`
    position: relative;
    width: 100%;
    height: 70vh;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
    display: flex;
    align-items: center;
    background-color: #81ecec;

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
    }
    z-index: 999;

    @media screen and (max-width: 767px) {
        width: 90%;
        & > h1 {
            text-align: center;
            font-size: 50px;
            line-height: 1.4;
            font-weight: 700;
        }
    }

    @media screen and (max-width: 479px){
        width: 95%;
        & > h1 {
            text-align: center;
            font-size: 40px;
            line-height: 1.4;
            font-weight: 700;
        }
    }
`

export const UnderlineParent = styled.div`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    & > span {
        margin-bottom: -5px;
    }
`

export const Underline = styled.div`
    height: 9px;
    background: #e74c3c;
    border-radius: 8px;
`

export const HeroOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
`

