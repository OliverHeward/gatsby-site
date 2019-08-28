import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

const PortfolioItemsWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const PortfolioItem = styled.div`
    width: 300px;
    display: block;
    padding: 0px;
    margin: 15px;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px #eee;
`

const PortfolioImage = styled.img`
    max-width: 100%;
    margin: 0;
    padding: 0;
`

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 20px;
  margin: 5px 0 10px;
  padding: 0;
`

const LinkTo = styled(Link)`
  margin: 5px 0;
  background-color: #663399;
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
  text-decoration: none;
`

const TextWrap = styled.div`
  padding: 5px 15px 15px;
  text-align: center;
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
            <PortfolioItem key={portfolioItem.id}>
                <PortfolioImage src={portfolioItem.node.featured_media.source_url} alt="Thumbnail" />
                <TextWrap>
                  <Title>{portfolioItem.node.title}</Title>
                  <LinkTo to={`/portfolio/${portfolioItem.node.slug}`}>Read More</LinkTo>
                </TextWrap>
            </PortfolioItem>
        ))}
        </PortfolioItemsWrapper> )} />
    )
}

export default PortfolioItems