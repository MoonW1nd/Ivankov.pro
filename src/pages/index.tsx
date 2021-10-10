import * as React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
    site: {
        siteMetadata: {
            title: string;
        }
    }
}

type Props = PageProps<DataProps>;

const MainPage = ({ data, location }: Props): JSX.Element => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
        <Seo title="ivankov: main" />
        <h1>александр иванков</h1>
        <p>разработчик интерфейсов</p>
    </Layout>
  )
}

export default MainPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
