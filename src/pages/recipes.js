import React from 'react'
import Layout from '../components/Layout'

import Seo from '../components/SEO'
import AllRecipes from '../components/AllRecipes'


const Recipes = (props) => {
  return (
    <Layout>
      <Seo title="Recipes" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
