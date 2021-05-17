import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import setupTags from '../utils/setupTags'

const Tags = ({ data }) => {
  const tags = data.allContentfulRecipe.nodes
  const newTags = setupTags(tags)

  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map(tag => {
            const tagName = tag[0]
            const tagCount = tag[1]

            return <Link to={tagName}	key={`/${tagName}`} className="tag">
              <h5>{tagName}</h5>
              <p>{tagCount} recipe(s)</p>
            </Link>
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(sort: {fields: title, order: ASC}) {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
