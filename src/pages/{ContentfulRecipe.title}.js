import React from 'react'
import { graphql, Link } from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {BsClockHistory, BsClock, BsPeople} from 'react-icons/bs'
import slugify from 'slugify'

import Layout from '../components/Layout'
import Seo from '../components/SEO'

const RecipeTemplate = ({ data }) => {
  const {title, prepTime, cookTime, servings, image, content, description:{description}} = data.contentfulRecipe
  const {instructions, ingredients, tags, tools} = content
  const pathToImage = getImage(image)

  return (
    <Layout>
      <Seo title={title} description={description} />
      <main className="page">
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <GatsbyImage image={pathToImage} alt={title} className="about-img" />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{servings}</p>
                </article>
              </div>
              {/* tags */}
              <p className="recipe-tags">
                Tags: {tags.map((tag, index) => <Link to={`/tags/${slugify(tag, {lower:true})}`} key={index}>{tag}</Link>)}
              </p>
            </article>
          </section>
          {/* rest of the content */}
          <section className="recipe-content">
            <article>
              <h4>Instructions</h4>
              {instructions.map((item, index) => {
                return <div className="single-instruction">
                  <header>
                    <p>step {index + 1}</p>
                    <div></div>
                  </header>
                  <p>{item}</p>
                </div>
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>Ingredients</h4>
                {ingredients.map((item, index) => {
                  return <p key={index} className="single-ingredient">{item}</p>
                })}
              </div>
              <div>
                <h4>Tools</h4>
                {tools.map((item, index) => {
                  return <p key={index} className="single-tool">{item}</p>
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleRecipe($id:String) {
    contentfulRecipe(id: {eq: $id}) {
      id
      title
      prepTime
      servings
      cookTime
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
      content {
        instructions
        ingredients
        tags
        tools
      }
      description {
        description
      }
    }
  }
`

export default RecipeTemplate
