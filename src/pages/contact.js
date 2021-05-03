import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Contact = (props) => {
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
            <form className="form contact-form">
              <div className="form-row">
                <label htmlGor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlGor="email">Your Email</label>
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
      </main>
    </Layout>
  )
}

export default Contact
