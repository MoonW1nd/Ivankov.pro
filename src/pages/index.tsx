import {Typography} from 'antd';
import {graphql} from 'gatsby';
import React from 'react';
import AShape from '../components/a-shape';
import Logo from '../components/logo';
import {selectSiteMetadata} from '../selectors/siteMetadata';

import styles from './styles.module.css';

const gitHubLogo = require('../../static/github-seeklogo.com.svg');

const {Text} = Typography;

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

interface IMetaData {
    site: {
        siteMetadata: {
            title: string;
            description: string;
        };
    };
}

interface IMainPageProps {
    data: IMetaData;
}

export const MainPage = ({data}: IMainPageProps) => (
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
