import React from 'react'
import { GridItem } from './components'
import { GridWrapper} from './Grid.style'


type GridProps = {
    gridItems: any
}


export const Grid: React.FunctionComponent<GridProps> = ({
    gridItems
}) => {
    return(
        <GridWrapper>
            {gridItems.map((item: any, index: any)=> (
               
              <GridItem item={item} key={index} />

            ))}

        </GridWrapper>
    )
}
