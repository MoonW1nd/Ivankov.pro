module.exports = {
  siteMetadata: {
    title: 'александр иванков',
    description: 'разработчик интерфейсов',
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true,
      }
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
    },
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