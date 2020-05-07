import styled from 'styled-components';

export const DestinationWrapper = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 767px){
        flex-direction: column;
    }
`

export const DestinationContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 3px solid #000;
    border-radius: 8px;
    width: 40%;
    padding: 20px;
    font-size: 20px;
    align-items: center;
    & > h2 {
        color: #1e874b;
    }
    & > h3 {
        font-size: 26px;
    }
    & > ul {
        text-align: left;
        list-style-type: none;
        & > li {
                padding: 10px;

            & > span {
                color: #e67e22;
                font-weight: 700;
                padding-left: 10px;
            }
        }
    }
    @media screen and (max-width: 767px){
        width: 90%;
        margin: 0 auto;
    }
`
export const DestinationImageWrapper = styled.div`
    margin-right: 50px;
    max-width: 525px;
    height: 295px;
    & > div {
        border-radius: 8px;
    }
    @media screen and (max-width: 767px){
        width: 90%;
        margin: 0 auto;
        margin-bottom: 25px;
    }
`

export const DestinationButton = styled.button`
    margin-top: 40px;
    margin-right: auto;
    margin-left: auto;
    padding: 18px 30px 18px 30px;
    border-style: solid;
    border-width: 3px;
    border-color: #333;
    border-radius: 8px;
    background-color: #f1c40f;
    font-family: Visbyroundcf, sans-serif;
    color: #333;
    font-size: 25px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
`

