import React from 'react'
import styled from 'styled-components'

const Footer = (props) => {
  return (
    <Styles>
      <p>© {new Date().getFullYear()} <span>SimplyRecipes</span>. Built with <a href="https://gatsbyjs.com/">Gatsby</a></p>
    </Styles>
  )
}

const Styles = styled.footer`
  background-color: black;
  color: white;
  padding: 11px;
  text-align: center;

  p {
      margin-bottom: 0px;
      font-size: 0.8rem;
  }

  span {
    color: var(--primary-500);
  }

  a {
    color: var(--primary-500);
    text-decoration: none;
  }
`

export default Footer
