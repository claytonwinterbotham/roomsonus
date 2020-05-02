import styled from 'styled-components';

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
    align-content: space-around
    justify-content: space-between
    margin-right: auto;
    margin-left: auto;
    border-radius: 8px;
`

export const GridItemWrapper = styled.div`
    position: relative;
    cursor: pointer;
    & > div {
        border-radius: 8px;
    }
`
export const GridItemSkeletonWrapper = styled.div`
    width: 100%;
    height: 200px;
`

export const GridItemTitle = styled.h3`
    position: absolute;
    left: 0%;
    top: auto;
    right: 0%;
    bottom: 0%;
    margin-top: 0px;
    margin-left: 10px;
    font-family: Visbyroundcf, sans-serif;
    color: #fff;
    font-weight: 700;
`
export const GridItemOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
}

`

export const GridItemImage = styled.img`
    position: relative;
    border-radius: 8px;
`