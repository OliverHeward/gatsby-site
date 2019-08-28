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
import Footer from '../components/Footer';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }
`

const LayoutWrapper = styled.div`
  margin: 0 auto;
  padding-top: 56px;
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
    <Footer />
  </div>
)

export default Layout
