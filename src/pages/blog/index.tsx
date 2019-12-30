import React from 'react';

import Header from '@components/header';
import Logo from '@components/logo';
import UnderConstructionMessage from '@components/under-construction-message';

import styles from './styles.module.css';

const BlogPage = () => (
    <div className={styles.root}>
        <Header>
            <h1>
                <Logo subLogo="блог" />
            </h1>
        </Header>

        <UnderConstructionMessage />
    </div>
);

export default BlogPage;
