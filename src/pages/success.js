import React from 'react'
import { useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Layout } from '../components'
import { Container } from '../containers'

export default ( props ) => {
    const data = useStaticQuery(graphql`
        query {
            image: file(name: {eq: "suitcases"}) {
                cloudinary: childCloudinaryAsset {
                    fluid(maxWidth: 500){
                      ...CloudinaryAssetFluid
                    }
                }
            }
        }
    `)
    
    return (
        <Layout>
            <Container>
                <h3 style={{ textAlign: 'center'}}>Congatulations! Get ready to pack your bags.</h3>
                <h4 style={{ textAlign: 'center'}}>Your voucher will be sent to your email shortly.</h4>
                <div
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: '500px',
                        maxHeight: '500px',
                        marginTop: '100px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    
                    }}
                >
                <Img 
                    fluid={data.image.cloudinary.fluid}
                />
                </div>
            </Container>
        </Layout>
    )
}