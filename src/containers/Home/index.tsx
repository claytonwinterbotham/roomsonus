import React, {Fragment} from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Hero, HeroContent, HeroOverlay } from './Home.style'

interface HomeProps {

}

export const Home: React.FunctionComponent<HomeProps> = () => {
    const data = useStaticQuery(graphql`
        query {
            image: file(name: {eq: "herobg"}) {
                cloudinary: childCloudinaryAsset {
                    fluid(maxWidth: 1920) {
                      ...CloudinaryAssetFluid
                    }
                }
            }
        }
    `)

    return(
       <Fragment>
           <Hero
            fluid={data.image.cloudinary.fluid}
            >
                <HeroOverlay />
                <HeroContent>
                    <h1>Compimentary Vacation Stays, With <span>No Catch!</span></h1>
                </HeroContent>              
           </Hero>
       </Fragment>
    )
}