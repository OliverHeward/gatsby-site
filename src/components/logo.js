import React from 'react';
import { graphql, staticQuery } from 'gatsby';
import styled from 'styled-components';

const LogoItem = styled.img`
  width: 40px;
  height: auto;
  padding: 10px;
`;

const Logo = () => (
  <StaticQuery query={graphql`
    {
      allWordpressWpLogo{
        edges{
          node{
            url{
              source_url
            }
          }
        }
      }
    }
  `} render={props => (
    <div>
      <LogoItem src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt="logo" />
    </div>
  )} />
);

export default Logo;