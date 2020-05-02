import React from 'react'
import { Layout, Destination, DestinationSkeleton } from '../components'
import { Link }  from 'gatsby'
import { gql, useQuery } from '@apollo/client'
import { Container } from '../containers'

const GET_DESTINATION = gql`    
  query GetDestination($id: ID!){
    destination(query: $id){
          id
          country_code
          country_name
          location
          nights
          total_package_value
          activation_fee_per_night
          total_activation_cost
          image,
          imageName
      }
 }
 `
 
export default ( { location } ) => {

    const id = (location.state && location.state.query) ||
            location.pathname.replace(/^\/destination\/?/, '')

    console.log('id',id)

    const { data, loading, error } = useQuery(GET_DESTINATION, {
        variables: {
            id
        }
    })
    const destination = data ? data.destination : null

    return (
        <Layout>
            <Container>
                {error && <p>Destination not available...search again. <Link to={'search/'}>Back to search</Link></p>}
                {loading && <DestinationSkeleton />}
                {data && <Destination destination={destination} />}
            </Container>
        </Layout>
    )
}
