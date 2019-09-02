import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

const PortfolioItemsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
`

const PortfolioItem = styled.div`
    width: 280px;
    display: block;
    padding: 0px;
    margin: 15px;
    box-shadow: 0px 0px 8px #ccc;
    transition: all .4s ease;
    overflow: hidden;

    &:hover {
      box-shadow: 0 0 15px #3a3a3a;

      h2 {
        transform: scale(1.1);
        transition: all .3s ease;
      }
    }
`

const PortfolioImage = styled.img`
    max-width: 100%;
    margin: 0;
    padding: 0;
`

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 20px;
  margin: 5px 0 5px;
  padding: 0;
  color: #000;
`

const LinkTo = styled(Link)`
  margin: 5px 0;
  color: #663399;
  text-decoration: none;
  transition: all .5s ease;
  &:hover {
    padding: 0 15px;
    border-left: 1px solid #663399;
    border-right: 1px solid #663399;
  }
`

const ProjLink = styled(Link)`
  text-decoration: none;
  color: #663399;

  &:hover {
    img {
      transform: scale(1.1);
      transition: all .3s ease-in-out;
    }
  }
`

const TextWrap = styled.div`
  padding: 20px 15px 20px;
  height: auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
`

const PortfolioItems = () => {
    return (
        <StaticQuery query={graphql`
        {
            allWordpressWpPortfolio {
              edges{
                node {
                    id
                    slug
                  title
                  excerpt
                  featured_media {
                    source_url
                  }
                  content
                }
              }
            }
          }
        `} render={props => ( <PortfolioItemsWrapper> { props.allWordpressWpPortfolio.edges.map(portfolioItem => (
            <ProjLink to={`/portfolio/${portfolioItem.node.slug}`} key={portfolioItem.node.id}>
              <PortfolioItem key={portfolioItem.id}>
                  <PortfolioImage src={portfolioItem.node.featured_media.source_url} alt="Thumbnail" />
                  <TextWrap>
                    <Title>{portfolioItem.node.title}</Title>
                    <LinkTo to={`/portfolio/${portfolioItem.node.slug}`}>View Project</LinkTo>
                  </TextWrap>
              </PortfolioItem>
            </ProjLink>
        ))}
        </PortfolioItemsWrapper> )} />
    )
}

export default PortfolioItems