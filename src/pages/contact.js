import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

import RecipesList from '../components/RecipesList'

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes

  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Vidisse in cupidatat. Nostrud te quae arbitror, magna arbitror iis cillum amet a
              ab ne dolore eram cillum, arbitror nam senserit.
            </p>
            <p>
              Labore litteris singulis si anim appellat distinguantur.
            </p>
            <p>
              Nisi de o labore cernantur. Ita quid hic fugiat, incurreret arbitrantur non
              arbitror quo aut quo praesentibus e tempor cupidatat graviterque.
            </p>
          </article>
          <article>
            <form className="form contact-form" action="https://formspree.io/f/mzbyeyzj" method="POST">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textArea name="message" id="message"></textArea>
              </div>
              <button type="submit" className="btn block">Submit</button>
            </form>
          </article>
        </section>
        <section className="featured">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        content {
          id
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Contact
