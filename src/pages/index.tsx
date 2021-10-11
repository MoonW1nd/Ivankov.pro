import * as React from 'react';
import {graphql, PageProps} from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import MainPage from './main';

type DataProps = {
    site: {
        siteMetadata: {
            title: string;
        };
    };
};

type Props = PageProps<DataProps>;

const App = ({data, location}: Props): JSX.Element => {
    const siteTitle = data.site.siteMetadata.title;

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="ivankov: main" />
            <MainPage />
        </Layout>
    );
};

export default App;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
