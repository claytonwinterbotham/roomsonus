import React, { Fragment } from 'react'
import { Layout, SearchInput, Grid, GridSkeleton } from '../components'
import { gql, useQuery } from '@apollo/client'
import { Container } from '../containers'


const GET_ALL_DESTINATIONS = gql`    
  query GetAllDestinations($destination: String){
    destinations(query: $destination){
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
    const query = 
        (location.state && location.state.query) ||
        location.pathname.replace(/^\/search\/?/, '') || ''
    
    const trimmedQuery = query.replace(/-+/g, ' ')


    const { data, loading, error } = useQuery(GET_ALL_DESTINATIONS)


    const filteredData = data && (() => {
        const args = trimmedQuery 
        const destinations = data.destinations

        return destinations.filter((destination) => {
            const isCountryMatch = destination.country_name.toLowerCase().includes(args.toLowerCase())
            const isLocationMatch = destination.location.toLocaleLowerCase().includes(args.toLowerCase())
            return isCountryMatch || isLocationMatch
        })
    })()

    const resultsIsPlural = (filteredData && filteredData.length > 1) ? 'destinations' : 'destination' 
    const queryWord = trimmedQuery ? `for ${trimmedQuery}` : '' 

    const resultsElement = (filteredData && filteredData.length > 0) 
        ? `Showing ${filteredData.length} ${resultsIsPlural} ${queryWord}` 
        : `0 destinations ${queryWord}, try another location.`
    
    return (
        <Layout>
            <Container>
                <SearchInput></SearchInput>
                {loading && <GridSkeleton />}
                {error && <p>...Loading</p>}
                {data && (
                    <Fragment>
                        <p style={{marginBottom: '20px'}}>{resultsElement}</p>
                        <Grid 
                            gridItems={filteredData}
                        />
                    </Fragment>
                    ) 
                }
            </Container>
        </Layout>
    )
}
