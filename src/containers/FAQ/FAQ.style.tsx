import styled from 'styled-components'

export const FAQSection = styled.div`
    padding-top: 100px;
    background-color: transparent;
    color: transparent;
`

export const FAQGrid = styled.div`
    display: -ms-grid;
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 25px;
    grid-row-gap: 16px;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
    @media screen and (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`


export const FAQGridItem = styled.div`
`

export const FAQTitle = styled.h1`
    text-align: center;
    color: #1e874b;
`

export const FAQHeading = styled.h2`
    background-color: transparent;
    font-family: Visbyroundcf, sans-serif;
    color: #1e874b;
`

export const FAQParagraph = styled.p`
    background-color: transparent;
    color: #333;
    font-size: 19px;
    line-height: 27px;
`
