import React from 'react'
import Layout from '../components/layout'
import PortfolioItems from '../components/PortfolioItems';
import styled from 'styled-components'

const PageWrap = styled.div`
    max-width: 930px;
    padding: 30px;
    margin: 0 auto;
`

export default ({pageContext}) => (
    <Layout>
        <PageWrap>
            <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
            <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
            <PortfolioItems/>
        </PageWrap>
    </Layout>
);