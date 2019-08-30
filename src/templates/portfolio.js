import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const FeaturedImage = styled.img`
    max-width: 100%;
    margin: 0 auto;
    padding: 0;
    max-height: 100%;
`
const HeroGrad = styled.div`
    padding: 0;
    margin: 0 auto;
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 70%;
        max-width: 1120px;
    }
`

const Title = styled.h1`
    text-align: center;
    margin: 40px 0;
    font-size: 35px;
    text-transform: uppercase;

    @media screen and (min-width: 1024px) {
        font-size: 50px;
    }
`

const ContentWrapper = styled.section`
    max-width: 930px;
    margin: 0 auto;
    padding: 30px;
    text-align: center;
`

const Button = styled.a`
    padding: 10px 25px;
    margin: 0;
    text-align: center;
    background-color: #663399;
    border: 1px solid #663399;
    color: white;
    text-decoration: none;
    border-radius: 7px;
    text-transform: uppercase;

    &:hover {
        background: transparent;
        color: #663399;
        transition: all .3s ease-in-out;
    }
`

export default ({pageContext}) => (
    <Layout>
        <Title>{pageContext.title}</Title>  
        <HeroGrad>
            <FeaturedImage src={pageContext.featured_media.source_url} />
        </HeroGrad>
        <ContentWrapper>
            <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
            <Button href={pageContext.acf.portfolio_url} target="_blank">
                Visit Site
            </Button>
        </ContentWrapper>
    </Layout>
);