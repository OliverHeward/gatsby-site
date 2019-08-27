/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import MainMenu from './MainMenu'
import { Helmet } from 'react-helmet'
import {graphql, StaticQuery} from 'gatsby'
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }
`

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <StaticQuery query={graphql`
      {
        allWordpressWpFavicon{
          edges{
            node{
              url{
                source_url
              }
            }
          }
        }
      }
    `} render={props => <Helmet><link rel="icon" href={props.allWordpressWpFavicon.edges[0].node.url.source_url} /></Helmet>} />
    <MainMenu />
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  </div>
)

export default Layout
