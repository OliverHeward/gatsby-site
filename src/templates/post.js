import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import Moment from 'react-moment'
import { createBrowserHistory } from 'history'
import { FaArrowLeft } from 'react-icons/fa'

const BlogContainer = styled.div`
    max-width: 930px;
    padding: 30px;
    margin: 0 auto;
`

const UpperContent = styled.div`
    text-align: center;
`

const BlogHero = styled.img`
    max-width: 100%;
    box-sizing: border-box;
    margin: 20px 0;
`
const Author = styled.p`
    margin: 5px 0;
    padding: 0;
`

const BlogTitle = styled.h1`
    text-align: center;
    text-transform: uppercase;
    margin: 5px 0 0 0;
    font-size: 35px;

    @media screen and (min-width: 1024px) {
        font-size: 50px;
    }
`

const Momemt = styled(Moment)`
    opacity: .8;
    color: #663399;
`

const BackButton = styled.button`
    border: 1px solid white;
    border-radius: 10px;
    background-color: transparent;
    font-size: 20px;
    display: flex;
    align-items: center;
    color: #3a3a3a;

    &:hover {
        border: 1px solid #663399;
        transition: all .3s ease;
        color: #663399;
    }
`

const ArrowLeft = styled(FaArrowLeft)`
    margin-right: 10px;
`


export default ({pageContext}) => {
    const history = createBrowserHistory();
    const location = history.location;
    const unlisten = history.listen((location, action) => {
        console.log(action, location.pathname, location.state);
    });
    const onGoBack = () => {
        history.go(-1);
        unlisten();
    };
    const dateToFormat = pageContext.date;

    return (
    <Layout>
        <BlogContainer>
            <BackButton onClick={onGoBack}><ArrowLeft/> Go back!</BackButton>
            <UpperContent>
                <BlogTitle>{pageContext.title}</BlogTitle>
                <Momemt format="DD/MM/YYYY">{dateToFormat}</Momemt>
                <Author>by {pageContext.author.name}</Author>
            </UpperContent>
            <BlogHero src={pageContext.featured_media.source_url} />
            <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
        </BlogContainer>
    </Layout>
    )
}