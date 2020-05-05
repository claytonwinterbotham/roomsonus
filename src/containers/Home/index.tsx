import React, {Fragment} from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Hero, HeroContent, HeroOverlay, UnderlineParent, Underline } from './Home.style'

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
                    <h1><span>Compimentary</span> Vacation Stays, With { ' ' } 
                        <UnderlineParent>
                            <span>No Catch!</span>
                            <Underline></Underline>
                        </UnderlineParent>
                    </h1>
                </HeroContent>              
           </Hero>
       </Fragment>
    )
}