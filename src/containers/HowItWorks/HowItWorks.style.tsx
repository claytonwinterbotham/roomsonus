import styled from 'styled-components'
import { Link } from 'gatsby'

export const HIWSection = styled.div`
    margin-top: 0px;
    background-color: transparent;
`

export const HIWGrid = styled.div`
    display: -ms-grid;
    display: grid;
    margin-top: 0px;
    grid-auto-columns: 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
    @media screen and (max-width: 767px) {
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
        -ms-grid-rows: auto auto auto;
        grid-template-rows: auto auto auto;
    }
`
interface HIWGridItemProps{
    piggyBank?: boolean,
    calendar?: boolean,
    voucher?: boolean
}

export const HIWGridItem = styled.div<HIWGridItemProps>`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: auto;
    padding: 20px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    border: 3px solid #000;
    border-radius: 8px;
    background-color: transparent;

    ${props => props.voucher
    ? `
        -ms-grid-column-span: 2;
        grid-column-end: 3;
        -ms-grid-column: 1;
        grid-column-start: 1;
        -ms-grid-row-span: 1;
        grid-row-end: 3;
        -ms-grid-row: 2;
        grid-row-start: 2;
    `: null
    }

    @media screen and (max-width: 479px){
        ${props => props.piggyBank
        ? `
            -webkit-align-self: auto;
            -ms-flex-item-align: auto;
            -ms-grid-row-align: auto;
            align-self: auto;
            -ms-grid-column-align: auto;
            justify-self: auto;
        `: null }

        ${props => props.voucher
        ? `
            ms-grid-column-span: 2;
            grid-column-end: 3;
            -ms-grid-column: 1;
            grid-column-start: 1;
            -ms-grid-row-span: 1;
            grid-row-end: 3;
            -ms-grid-row: 2;
            grid-row-start: 2;
        `: null
        }
    }
    @media screen and (max-width: 767px){
        ${props => props.piggyBank
        ? `
            -ms-grid-column-span: 2;
            grid-column-end: 3;
            -ms-grid-column: 1;
            grid-column-start: 1;
            -ms-grid-row-span: 1;
            grid-row-end: 2;
            -ms-grid-row: 1;
            grid-row-start: 1;
            -ms-grid-row-align: auto;
            align-self: auto;
            -ms-grid-column-align: auto;
            justify-self: auto;
        `: null }

        ${props => props.calendar
        ? `
            -ms-grid-column-span: 2;
            grid-column-end: 3;
            -ms-grid-column: 1;
            grid-column-start: 1;
            -ms-grid-row-span: 1;
            grid-row-end: 3;
            -ms-grid-row: 2;
            grid-row-start: 2;

            `: null
        }

        ${props => props.voucher
        ? `
            -ms-grid-column-span: 2;
            grid-column-end: 3;
            -ms-grid-column: 1;
            grid-column-start: 1;
            -ms-grid-row-span: 1;
            grid-row-end: 4;
            -ms-grid-row: 3;
            grid-row-start: 3;
        `: null
        }
    }
`

export const VoucherWrap = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 70%;
    margin-right: auto;
    margin-left: auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
`

export const HIWHeading = styled.h2`
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    -ms-grid-row-align: auto;
    align-self: auto;
    background-color: transparent;
    font-family: Visbyroundcf, sans-serif;
    color: #1e874b;
    font-weight: 700;
`

export const HIWParagraph = styled.p`
    font-size: 20px;
    line-height: 28px;
`

export const HIWImage = styled.img`
    width: 300px;
    margin-right: auto;
    margin-left: auto;
`
export const HIWCTA = styled(Link)`
    display: inline-block;  
    margin-top: 40px;
    margin-right: auto;
    margin-left: auto;
    padding: 18px 29px 18px 30px;
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
    text-decoration: none;
`