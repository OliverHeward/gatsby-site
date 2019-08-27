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
    padding: 15px;
    margin: 15px;
    border: 1px solid #efefef;
`

const PortfolioImage = styled.img`
    max-width: 100%;
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
                <h2>{portfolioItem.node.title}</h2>
                <PortfolioImage src={portfolioItem.node.featured_media.source_url} alt="Thumbnail" />
                <div dangerouslySetInnerHTML={{__html: portfolioItem.node.excerpt}} />
                <Link to={`/portfolio/${portfolioItem.node.slug}`}>
                    Read More
                </Link>
            </PortfolioItem>
        ))}
        </PortfolioItemsWrapper> )} />
    )
}

export default PortfolioItems