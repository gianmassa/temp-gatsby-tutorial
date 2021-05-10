import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Images = (props) => {
  return (
    <Styles>
      <article>
        <h4>constrained / default</h4>
        {/* When setting with and height in constrained, it's actually a max-width and max-height */}
        <StaticImage src="../assets/images/recipe-1.jpeg" alt="food"
        placeholder="tracedSVG"
        layout="constrained"
        className="example-img"
        as="section"
        />
      </article>
      <article>
        <h4>fixed</h4>
        {/* When setting with and height in constrained, it's actually a max-width and max-height */}
        <StaticImage src="../assets/images/recipe-1.jpeg" alt="food"
        placeholder="blurred"
        layout="fixed"
        width={200}
        className="example-img"
        as="div"
        />
      </article>
      <article>
        <h4>full width</h4>
        {/* When setting with and height in constrained, it's actually a max-width and max-height */}
        <StaticImage src="../assets/images/recipe-1.jpeg" alt="food"
        placeholder="dominantColor"
        layout="fullWidth"
        className="example-img"
        as="div"
        />
      </article>
    </Styles>
  )
}

const Styles = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;

  article {
    border: 2px solid red;
  }
  .example-img {
    border-radium: 1rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default Images
