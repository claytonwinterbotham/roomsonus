import React from 'react'
import { Link } from 'gatsby'
import { GridItemWrapper, GridItemTitle, GridItemOverlay } from '../Grid.style'
import { GridItemImage } from './GridItemImage'

type GridItemProps = {
    item: any
}


export const GridItem: React.FunctionComponent<GridItemProps> = ({
    item,
}) => {
    //console.log('item',item)
    return(
        <Link
            to={`/destination/${item.id}`}
            state={{ id: item.id }}
        >
            <GridItemWrapper>
            <GridItemImage id={item.id} image={item.image} imageName={item.imageName}></GridItemImage>
            <GridItemOverlay />
            <GridItemTitle>{item.location}</GridItemTitle>
            </GridItemWrapper>
        </Link>
        
    )
}


