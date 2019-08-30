import React, {useState} from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import { bubble as Menu } from 'react-burger-menu'
import styled from 'styled-components'

const HamLink = styled.a`
    color: white;
    text-decoration none;
    padding: 15px;
    font-size: 25px;
    transition: all .3s ease;

    &:hover {
        color: #663399;
    }
`

const hamMenu = () => {
    const [menuState, setMenuState] = useState(false);
    
    const handleStateChange = () => {
        setMenuState(!setMenuState);
    }

    const closeMenu = () => {
        setMenuState(false);
    }

    const toggleMenu = () => {
        setMenuState(!setMenuState);
    }

    var styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          right: '36px',
          top: '13px'
        },
        bmBurgerBars: {
          background: '#fff'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '30px',
          width: '30px'
        },
        bmCross: {
          background: '#fff',
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100vh',
          top: '0',
          maxWidth: '350px',
          width: '80vw'
        },
        bmMenu: {
          background: '#3a3a3a',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#3a3a3a'
        },
        bmItemList: {
          color: '#fff',
          display: 'flex',
          flexFlow: 'column nowrap',
        },
        bmItem: {
          display: 'inline-block',
          textDecoration: 'none',
          padding: '15px',
          color: '#fff'
        },
        bmOverlay: {
          background: '#663399'
        }
      }      

    return (
        <Menu
            styles={styles}
            right
            isOpen={menuState}
            onStateChange={handleStateChange}
            >
            <StaticQuery query={graphql`
            {
                allWordpressWpApiMenusMenusItems(filter: {
                name:{
                    eq: "Main menu"
                }
                }){
                edges{
                    node {
                    name
                    items {
                        title
                        object_slug
                    }
                    }
                }
                }
            }
            `} render={props => props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                <HamLink href={item.object_slug} key={item.title}>
                    {item.title}
                </HamLink>
            ))} />
        </Menu>
    )
}

export default hamMenu