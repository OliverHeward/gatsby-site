import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaGithub, FaReact, FaWordpress } from 'react-icons/fa'
import GatsbyIcon from '../images/gatsby-icon.png'
import GraphIcon from '../images/graphql.svg'

const MainFooter = styled.section`
    background-color: #3a3a3a;
    color: white;
    width: 100vw;
`
const FooterContainer = styled.div`
    max-width: 930px;
    padding: 40px;
    margin: 0 auto;
`
const SocialContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 300px;
    margin: 0 auto 10px;
`
const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    margin: 0 auto;
    flex-flow: column nowrap;
`
const FooterLink = styled.a`
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    margin: 5px 0;
`
const LinkText = styled.p`
    margin: 0;
    padding: 0;
    margin-left: 10px;
`
const Title = styled.h2`
    text-transform: uppercase;
`
const SmallTit = styled.h3`
    text-transform: uppercase;
    font-size: 18px;
    font-weight: lighter;
`
const LinkedIn = styled(FaLinkedin)`
    font-size: 30px;
`
const Github = styled(FaGithub)`
    font-size: 30px;
`
const Powered = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 400px;
    flex-flow: row nowrap;
    color: #663399;
    opacity: .5;
`

const Footer = () => (
    <MainFooter>
        <FooterContainer>
            <SocialContainer>
                <FooterLink href="https://linkedin.com/oliverheward"><LinkedIn /></FooterLink>
                <FooterLink href="https://github.com/oliverheward"><Github /></FooterLink>
            </SocialContainer>
            <ContactContainer>
                <SmallTit>This site is powered by</SmallTit>
                <Powered>
                    <img src={GatsbyIcon} width="40" height="40" />
                    <FaReact color="#fff" size="40" />
                    <img src={GraphIcon} width="40" height="40"/>
                    <FaWordpress color="#fff" size="40" />
                </Powered>
            </ContactContainer>
        </FooterContainer>
    </MainFooter>
);

export default Footer;