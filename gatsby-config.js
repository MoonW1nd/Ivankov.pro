module.exports = {
  siteMetadata: {
    title: 'александр иванков',
    description: 'разработчик интерфейсов',
  },
  plugins: [
    'gatsby-transformer-remark',

    /**
     * For styling Ant-design
     * @see https://ant.design/docs/react/customize-theme
     */
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
    },
    {
        resolve: `gatsby-plugin-alias-imports`,
        options: {
          alias: {
            "@components": "src/components",
          },
          extensions: []
        }
      }
  ],
}
