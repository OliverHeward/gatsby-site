import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import {graphql, StaticQuery, Link} from 'gatsby'

const ContentWrapper = styled.section`
    max-width: 930px;
    margin: 0 auto;
    padding: 30px;
`
const BlogWrapper = styled.section`
    display: flex;
    align-items: center;
    flex-flow: row wrap;
`
const Image = styled.img`
    max-width: 100%;
`
const ImageWrap = styled.div`
    width: 100%;
`
const PostWrap = styled(Link)`
    padding: 5px 10px;
    margin: 15px;
    width: 300px;
    border: 1px solid #ccc;
    text-decoration: none;
`

const Blog = () => (
    <Layout>
        <ContentWrapper>
            <h2>Blog</h2>
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
                        <ImageWrap>
                            <Image src={blogItem.node.featured_media.source_url} />
                         </ImageWrap>
                        <div>
                            <h2>{Date.getDate(blogItem.node.title)}</h2>
                            <p>{blogItem.node.date}</p>
                        </div>
                    </PostWrap>
                ))}
                </BlogWrapper> )} />
        </ContentWrapper>
    </Layout>
);

export default Blog