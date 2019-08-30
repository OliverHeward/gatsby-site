import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import {graphql, StaticQuery, Link} from 'gatsby'
import Moment from 'react-moment'

const ContentWrapper = styled.section`
    max-width: 930px;
    margin: 0 auto;
    padding: 30px;
`
const BlogWrapper = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    height: 100%;
`   
const Image = styled.img`
    width: 100%;
    position: absolute;
    z-index: 0;
    transition: all .4s ease;
    bottom: 0;
`
const ImageWrap = styled.div`
    width: 100%;
    max-width: 300px;
`

const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
    
    @media screen and (min-width: 1024px) {
        font-size: 50px;
    }
`
const PostTitle = styled.h3`
    font-size: 15px;
    text-transform: uppercase;
    color: white;
    letter-spacing: 3px;
    margin: 5px 0;
`

const TitleFade = styled.div`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 13px;
    z-index: 20;
    text-align: center;
    padding: 5px 0 10px;
`

const PostWrap = styled(Link)`
    margin: 10px;
    width: 300px;
    height: 200px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    position: relative;
    text-decoration: none;
    box-shadow: 0 0 15px 1px #ccc;
    overflow: hidden;

    &:hover {
        img {
            transform: scale(1.1);
            transition: all .3s ease;
            opacity: .9;
        }
    }
`

const Date = styled(Moment)`
    color: white;
    padding: 0;
    margin: 0;
    letter-spacing: 2px;
    font-size: 12px;
`

const Blog = () => {
    return (
    <Layout>
        <ContentWrapper>
            <Title>Blog</Title>
                <StaticQuery query={graphql`
                {
                    allWordpressPost {
                    edges {
                        node {
                        id
                        slug
                        title
                        author {
                            id
                            name
                        }
                        date
                        excerpt
                        link
                        featured_media {
                            source_url
                        }
                        } 
                    }
                    }
                }
                `} render={props => (<BlogWrapper> {props.allWordpressPost.edges.map(blogItem => (
                    <PostWrap to={`/blog/${blogItem.node.slug}`} key={blogItem.node.title}>
                        <TitleFade>
                            <PostTitle>{blogItem.node.title}</PostTitle>
                            <Date format="DD/MM/YYYY">{blogItem.node.date}</Date>
                         </TitleFade>
                        <ImageWrap>
                            <Image src={blogItem.node.featured_media.source_url} />
                         </ImageWrap>
                    </PostWrap>
                ))}
                </BlogWrapper> )} />
        </ContentWrapper>
    </Layout>
    )
};

export default Blog