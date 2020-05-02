import React from 'react'
//import Image from 'gatsby-image'
//import queryGridImages from '../../../Hooks/query-gridImages'
import Img from 'react-cloudinary-lazy-image'


interface Props {
    id: any,
    image: any,
    imageName: any
}


export const GridItemImage: React.FunctionComponent<Props> = ({
    id,
    image,
    imageName
}) => {
    console.log("rendered");
    return(
        <Img
            cloudName={'dy3c6sc72'}
            imageName={imageName}
            fluid={{
                maxWidth: 525,
            }}
            urlParams={'g_face,c_lfill'}
        />
    )
}



