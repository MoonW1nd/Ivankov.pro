module.exports = {
  siteMetadata: {
    title: 'Александр Иванков',
    description: 'Разработчик интерфейсов',
  },
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-transformer-remark',
    {
      resolve: "gatsby-plugin-ts-loader",
      options: {
        tslint: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      }
    }
  ],
}