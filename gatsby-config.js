module.exports = {
  siteMetadata: {
    title: 'александр иванков',
    description: 'разработчик интерфейсов',
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-ts`,
      options: {
        fileName: `src/typings/graphql.d.ts`,
        /**
         * @todo Включить как только появятся описания GraphQL schema
         */
        codegen: false,
      }
    },

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
