import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { FaEnvelope, FaCity } from 'react-icons/fa'

const PersonalImage = styled.img`
    max-width: 150%;
    max-height: 150%;
`

const TopContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-flow: row wrap;
    margin: 40px 0;
`

const ImageContainer = styled.div`
    height: 300px;
    max-width: 300px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin: 0px 0 30px;
    box-shadow: 0 0 10px #eee;
    margin:
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
    color: #663399;
    transition: all .3s ease;

    &:hover {
        color: #00d8ff;
    }
`

const Headline = styled.h1`
    font-size: 40px;
    color: #3a3a3a;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 20px;

    &:first-letter {
        color: #663399;
        border-bottom: 5px solid #663399;
    }
`

const BottomContent = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`

const ContentContainer = styled.div`
    max-width: 475px;
`

const Title = styled.h1`
    font-size: 25px;
    text-transform: uppercase;
`

const SkillsContainer = styled.div`
    width: 100%;
    margin: 0 0 0 auto;
    text-align: left;

    @media screen and (min-width: 1024px) {
        text-align: right;
        width: 400px;
    }
`

const WorkContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    text-align: left;

    @media screen and (min-width: 1024px) {
        text-align: right;
        width: 400px;
    }
`

const Exp = styled.div`
    margin: 15px 0;
    border-left: 1px solid #663399;
    padding-left: 10px;

    @media screen and (min-width: 1024px) {
        border-left: none;
        border-right: 1px solid #663399;
        padding-left: none;
        padding-right: 10px;
    }
`

const ExpTitle = styled.p`
    margin: 0;
    margin: 5px 0;
    padding: 0;
    font-size: 24px;
    color: #000;
`

const ExpRole = styled.h6`
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    color: #663399;
`

const ExpLink = styled.a`
    text-decoration: none;
    &:hover {
        p {
            margin-left: 10px;
            transition: all .3s ease-in-out;
        }
    }
    @media screen and (min-width: 1024px) {
        &:hover {
            p {
                margin-right: 10px;
                transition: all .3s ease-in-out;
            }
        }
    }
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
                    <MailLink href="mailto:{pageContext.acf.personal_info.email}"><FaEnvelope /> <MailText>{pageContext.acf.personal_info.email}</MailText></MailLink>
                    <p><FaCity /> {pageContext.acf.personal_info.city}</p>
                </PersonalInfo>
            </TopContent>
            <BottomContent>
                <ContentContainer>
                    <Title>{pageContext.title}</Title>
                    <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
                </ContentContainer>
                <ContentContainer>
                    <SkillsContainer>
                        <Title>Tech Stack</Title>
                        <p>HTML, CSS, SaSS/SCSS, PHP, JavaScript, jQuery, JSON, React, React Native, GatsbyJS, NodeJS, HTTP/HTTPS, Bootstrap, AJAX, GIT, AWS, MySQL, Wordpress, BabelRC, Gulp, Agile, Scrum, Photoshop</p>
                    </SkillsContainer>
                    <WorkContainer>
                        <Title>Experience</Title>
                        <Exp>
                            <ExpLink href="https://angellondon.co.uk">
                                <ExpTitle>Angel</ExpTitle>
                                <ExpRole>Junior Web Developer</ExpRole>
                            </ExpLink>
                        </Exp>
                        <Exp>
                            <ExpLink href="https://angellondon.co.uk">
                                <ExpTitle>D Hewy</ExpTitle>
                                <ExpRole>Junior Frontend Developer</ExpRole>
                            </ExpLink>
                        </Exp>
                        <Exp>
                            <ExpLink href="https://angellondon.co.uk">
                                <ExpTitle>RED Academy</ExpTitle>
                                <ExpRole>Web Developer Program</ExpRole>
                            </ExpLink>
                        </Exp>
                    </WorkContainer>
                </ContentContainer>
            </BottomContent>
        </HomeContainer>
    </Layout>
);

