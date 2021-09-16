module.exports = {
  siteMetadata: {
    title: 'Test Number 1',
    author: "Vitor Marques",
    site: 'test-1',
    description: 'This is a test gatsby website.'
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
};
