import styled from 'styled-components';

export const SearchWrapper = styled.div`
    width: 50%;
    margin-bottom: 60px;
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width: 767px) {
        width: 70%;
    }

    @media screen and (max-width: 479px){
        width: 90%;
    }
`

export const StyledSearchInput = styled.input`
    display: block;
    width: 100%;
    height: 38px;
    padding: 8px 12px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.428571429;
    color: #333333;
    vertical-align: middle;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 8px;
`