import * as React from 'react';
import {graphql, PageProps} from 'gatsby';

import MainPage from './main';

// type DataProps = {
//     site: {
//         siteMetadata: {
//             title: string;
//         };
//     };
// };

// type Props = PageProps<DataProps>;

const App = (): JSX.Element => {
    // const siteTitle = data.site.siteMetadata.title;

    return <MainPage />;
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
