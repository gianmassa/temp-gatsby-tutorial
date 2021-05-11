/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Simply Recipes',
    description: 'Nice and clean recipes site',
    author: 'John Doe',
    person: {name:'John', age:32},
    sampleData: ['item 1', 'item 2'],
    complexData: [{ name: 'John', age: 32}, {name: 'Susan', age:21}]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {}
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
