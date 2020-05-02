import React from 'react';
import { GridWrapper, GridItemSkeletonWrapper } from '../Grid/Grid.style'
import Skeleton from 'react-loading-skeleton'


const gridItems = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

export const GridSkeleton: React.FunctionComponent = () => {
    return(
        <GridWrapper>
            {gridItems.map((item,index)=> (
               
              <GridItemSkeletonWrapper key={index}>
                <Skeleton height={200} />
              </GridItemSkeletonWrapper>
              

            ))}

        </GridWrapper>
    )
}