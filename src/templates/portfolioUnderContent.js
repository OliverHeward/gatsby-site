import React from 'react'
import Layout from '../components/layout'
import PortfolioItems from '../components/PortfolioItems';
import styled from 'styled-components'

const PageWrap = styled.div`
    max-width: 930px;
    padding: 30px;
    margin: 0 auto;
`

const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    font-size: 35px;

    @media screen and (min-width: 1024px) {
        font-size: 50px;
    }
`

export default ({pageContext}) => (
    <Layout>
        <PageWrap>
            <Title>{pageContext.title}</Title>
            <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
            <PortfolioItems/>
        </PageWrap>
    </Layout>
);