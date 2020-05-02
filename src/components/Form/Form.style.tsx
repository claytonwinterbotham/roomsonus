import styled, { StyledFunction } from 'styled-components';


export const ModalForm = styled.form`
    margin: 0 auto;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & > div {
        margin-bottom: 25px;
        display: flex;
        flex-direction: column;
        justify: space-between;
        & > label {
            margin-bottom: 10px;
        }
        & > input {
            padding: 5px;
            border-width: 2px;
            border-color: #333;
            border-radius: 8px;
        }
        & > input::placeholder {
            font-size: 14px;
        }
        & > span {
            color: #e74c3c;
        }
    }
    
`
export const ErrorMessage = styled.p`
    font-size: 14px;
    color: #e74c3c;
    padding-top: 5px;
`

export const SubmitButton = styled.button`
    padding: 12px 25px 12px 25px;
    border-style: solid;
    border-width: 3px;
    border-color: #333;
    border-radius: 8px;
    background-color: #f1c40f;
    font-family: Visbyroundcf, sans-serif;
    color: #333;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: 'pointer';
`
