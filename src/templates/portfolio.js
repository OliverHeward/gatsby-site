import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const FeaturedImage = styled.img`
    max-width: 300px;
    margin: 0 auto;
`

export default ({pageContext}) => (
    <Layout>
        <h1>{pageContext.title}</h1>
        <FeaturedImage src={pageContext.featured_media.source_url} />
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
    </Layout>
);