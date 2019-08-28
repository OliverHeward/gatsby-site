import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const FeaturedImage = styled.img`
    max-width: 100vw !important;
    margin: 0 auto;
    padding: 0;
    opacity: .8;
    max-height: 100%;
`
const HeroGrad = styled.div`
    background: #000;
    padding: 0;
    margin: 0;
`

const ContentWrapper = styled.section`
    max-width: 930px;
    margin: 0 auto;
    padding: 30px;
`

const Button = styled.a`
    padding: 10px 25px;
    margin: 0;
    text-align: center;
    background-color: purple;
    color: white;
    text-decoration: none;
    border-radius: 7px;
    text-transform: uppercase;
`

export default ({pageContext}) => (
    <Layout>
        <HeroGrad>
            <FeaturedImage src={pageContext.featured_media.source_url} />
        </HeroGrad>
        <ContentWrapper>
            <h1>{pageContext.title}</h1>  
            <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
            <Button href={pageContext.acf.portfolio_url} target="_blank">
                Visit Site
            </Button>
        </ContentWrapper>
    </Layout>
);