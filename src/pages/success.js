import React from 'react'
import { Layout } from '../components'
import suitecases from '../images/suitcases.svg'
import { Container } from '../containers'

export default ( props ) => {
    
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
                    <img src={suitecases} />
                </div>
            </Container>
        </Layout>
    )
}