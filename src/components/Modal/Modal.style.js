import styled from 'styled-components';


export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: ${props => props.show ? 'block' : 'none'}
`

export const ModalMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position:fixed;
    background: white;
    width: 40%;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-style: solid;
    border-radius: 8px;
    border: 3px solid #333;
    padding: 30px;
    overflow: hidden;

    @media screen and (max-width: 767px){
        width: 90%;
    }
`
export const ModalHeader = styled.div`
    margin: 25px 40px;
    font-size: 22px;
    text-align: center;
    & > p {
        line-height: 1.5;
        & > span {
            color: #e67e22;
        }
    }
`
export const CloseButton = styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 30px;
    font-weight: 700;
    background: transparent;
    border: none;
    cursor: pointer;
`
