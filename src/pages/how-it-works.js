import React from 'react'
import { Layout } from '../components'
import { HowItWorks, FAQ, Container } from '../containers'


export default ( props ) => {
    
    return (
        <Layout>
            <Container>
                <HowItWorks/>
                <FAQ />
            </Container>
        </Layout>
    )
}