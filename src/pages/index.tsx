import {graphql} from 'gatsby';
import React from 'react';
import AShape from '../components/a-shape';
import Logo from '../components/logo';

import styles from './styles.module.css';

const gitHubLogo = require('../../static/github-seeklogo.com.svg');

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
    <div>
        <h1>
            <Logo />
        </h1>
        <img className={styles.gitHubLogo} src={gitHubLogo} />
        <section className={styles.navigation}>
            <AShape type="develop" />
            <AShape type="design" />
            <AShape type="blog" />
        </section>
    </div>
);

export default MainPage;
