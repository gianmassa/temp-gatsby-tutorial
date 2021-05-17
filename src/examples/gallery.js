import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import styled from 'styled-components'

const query = graphql`
  {
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: {grayscale: true}
            width: 200
            height: 200
          )
        }
      }
    }
  }
`

const Gallery = (props) => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  return (
    <Wrapper>
      {nodes.map((image, index) => {
        const pathToImage = getImage(image)
        return (
          <article key={index}>
            <GatsbyImage
              image={pathToImage}
              alt={image.name}
              className="gallery-img"
            />
            <p>{image.name}</p>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  article {
    margin: 5px;
  }

  .gallery-img {
    border-radius: 1rem;
  }
`


export default Gallery
