/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client'
import fetch from 'isomorphic-fetch'

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'https://powerful-ravine-15640.herokuapp.com/',
    fetch
  })
})

export const wrapRootElement = ({ element }) => (
    <ApolloProvider client={client}>{element}</ApolloProvider>
)