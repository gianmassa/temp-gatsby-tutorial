import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import RecipesList from '../components/RecipesList'

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes

  return (
    <Layout>
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes}/>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getRecipesByTag($tag:[String]) {
    allContentfulRecipe(
      filter: {content: {tags: {in: $tag}}},
      sort: {fields: title, order: ASC}
    ) {
      nodes {
        content {
          tags
        }
        id
        cookTime
        prepTime
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagTemplate
