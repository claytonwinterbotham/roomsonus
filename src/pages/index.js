import React from 'react'
import { Layout } from '../components'
import { Home, HowItWorks, FAQ, Container } from '../containers'


export default ( {...props} ) => {
    return (
        <Layout>
            <Home />
            <Container>
                <HowItWorks />
                <FAQ />
            </Container>
        </Layout>
    )
}
