import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { FaEnvelope } from 'react-icons/fa'

const PersonalImage = styled.img`
    max-width: 150%;
    max-height: 150%;
`

const TopContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-flow: row wrap;
`

const ImageContainer = styled.div`
    height: 300px;
    max-width: 300px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin: 0px 0 20px;
    box-shadow: 0 0 10px #eee;
`
const HomeContainer = styled.section`
    max-width: 930px;
    padding: 30px;
    margin: 0 auto;
`
const PersonalInfo = styled.div`

`
const MailLink = styled.a`
    color: #3a3a3a;
    text-decoration: none;
    display: flex;
`
const MailText = styled.p`
    margin: 0;
    padding: 0 0 0 5px;
    color: purple;
`

const Headline = styled.h1`
    font-size: 40px;
    color: purple;
    text-transform: uppercase;
    margin: 0;
`

export default ({pageContext}) => (
    <Layout>
        <HomeContainer>
            <TopContent>
                <ImageContainer>
                    <PersonalImage src={pageContext.acf.personal_image.source_url} alt="Me" />
                </ImageContainer>
                <PersonalInfo>
                    <Headline>{pageContext.acf.personal_info.Oliver}</Headline>
                    <p>Age: {pageContext.acf.personal_info.age}</p>
                    <MailLink href="mailto:{pageContext.acf.personal_info.email}"><FaEnvelope /> <MailText>{pageContext.acf.personal_info.email}</MailText></MailLink>
                    <p>{pageContext.acf.personal_info.city}</p>
                </PersonalInfo>
            </TopContent>
        <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
        </HomeContainer>
    </Layout>
);

