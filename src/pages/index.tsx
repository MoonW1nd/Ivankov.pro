import cn from 'classnames';
import {graphql, Link} from 'gatsby';
import React from 'react';
import AShape from '../components/a-shape';
import styles from './styles.module.css';

import Header from '@components/header';
import Icon from '@components/icon';
import ExternalLink from '@components/link';
import Logo from '@components/logo';

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
        <Header>
            <h1>
                <Logo showDescription={true} type="full" />
            </h1>
            <ExternalLink href="https://github.com/MoonW1nd" className={styles.link} target={'_blank'}>
                <Icon type="gitHub" className={styles.gitHubLogo} />
            </ExternalLink>
        </Header>
        <section className={cn(styles.navigation, styles.footerSpace)}>
            <Link to="/develop/">
                <AShape type="develop" />
            </Link>
            <Link to="/design/">
                <AShape type="design" />
            </Link>
            <Link to="/blog/">
                <AShape type="blog" />
            </Link>
        </section>
    </div>
);

export default MainPage;
