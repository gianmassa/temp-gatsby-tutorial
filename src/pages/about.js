import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const About = (props) => {
return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>Si dolore illustriora, hic anim relinqueret, doctrina quorum hic excepteur
              praetermissum qui senserit instituendarum o incididunt.</p>
            <p>Ingeniis comprehenderit iis admodum se noster est quibusdam constias o anim, et ita esse
              proident.</p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Puring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
