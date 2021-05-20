import React from 'react'
import Gallery from '../examples/gallery'
import Layout from '../components/Layout'
import Seo from '../components/SEO'

const Testing = (props) => {
  return (
    <Layout>
      <Seo title="Testing" />
      <main className="page">
        <Gallery />
      </main>
    </Layout>
  )
}



export default Testing
