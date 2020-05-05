import React from 'react'
import {Helmet} from 'react-helmet'
import Sticky from 'react-stickynode'
import NormalizeCSS from './normalizeCSS'
import GlobalCSS from './globalCSS'
import styled from 'styled-components'
import Navbar from '../Navbar'
import useSiteMetadata from '../../Hooks/use-sitemetadata'



type LayoutProps = {
  children: React.ReactNode,
}

export const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return(
      <>
        <NormalizeCSS />
        <GlobalCSS />
        <Helmet
          title={title}
          description={description}
        />
        <Sticky top={0} innerZ={9999} activeClass='nav-sticky'>
          <Navbar />
        </Sticky>
          {children}
      </>    
  )
}
