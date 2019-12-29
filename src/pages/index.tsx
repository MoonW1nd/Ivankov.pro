import cn from 'classnames';
import {graphql} from 'gatsby';
import React from 'react';
import AShape from '../components/a-shape';
import styles from './styles.module.css';

import Header from '@components/header';
import Icon from '@components/icon';
import Link from '@components/link';
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
            <Link href="https://github.com/MoonW1nd" className={styles.link} target={'_blank'}>
                <Icon type="gitHub" className={styles.gitHubLogo} />
            </Link>
        </Header>
        <section className={cn(styles.navigation, styles.footerSpace)}>
            <AShape type="develop" url="/" />
            <AShape type="design" url="/" />
            <AShape type="blog" url="/" />
        </section>
    </div>
);

export default MainPage;
