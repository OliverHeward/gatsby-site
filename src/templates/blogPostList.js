import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import {Link} from 'gatsby'
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

const Pagination = styled.div`
    display: flex;
    justify-content: flex-end;
`

const PageNumberWrapper = styled.div`
    border: 1px solid #663399;
    margin: 5px;
    border-radius: 5px;
    background: ${props => props.isCurrentPage ? '#663399' : 'white'}
    box-shadow: ${props => props.isCurrentPage ? '0 0 5px #ccc' : null}
`

const PageNumber = styled(Link)`
    display: block;
    padding: 8px 16px;
    text-decoration: none;
    color: ${props => props.isCurrentPage ? '#fff' : '#663399'}
`

export default ({pageContext}) => (
    <Layout>
        <ContentWrapper>
            <Title>Blog</Title>
            <BlogWrapper>
           {pageContext.posts.map(post => (
               <PostWrap key={post.node.id} to={`/post/${post.node.slug}`}>
                   <TitleFade>
                    <PostTitle>{post.node.title}</PostTitle>
                    <Date format="DD/MM/YY">{post.node.date}</Date>
                   </TitleFade>
                   <ImageWrap>
                       <Image src={post.node.featured_media.source_url} />
                   </ImageWrap>
               </PostWrap>
           ))}
           </BlogWrapper>
           <Pagination>
           {Array.from({length: pageContext.numberOfPages}).map((page, index) => (
               <PageNumberWrapper key={index} isCurrentPage={index + 1 === pageContext.currentPage}>
                   <PageNumber to={index === 0 ? '/blog' : `/blog/${index + 1}`} isCurrentPage={index + 1 === pageContext.currentPage}>
                        {index + 1}
                   </PageNumber>
               </PageNumberWrapper>
           ))}
           </Pagination>
        </ContentWrapper>
    </Layout>
);
