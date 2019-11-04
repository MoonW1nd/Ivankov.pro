import {graphql} from 'gatsby';
import React from 'react';
import AShape from '../components/a-shape';
import styles from './styles.module.css';

import Header from '@components/header';

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;

export const MainPage = () => (
    <div className={styles.root}>
        <Header />
        <section className={styles.navigation}>
            <AShape type="develop" />
            <AShape type="design" />
            <AShape type="blog" />
        </section>
    </div>
);

export default MainPage;
