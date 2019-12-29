import React from 'react';

import Header from '@components/header';
import Logo from '@components/logo';

import styles from './styles.module.css';

const BlogPage = () => (
    <div className={styles.root}>
        <Header>
            <h1>
                <Logo subLogo="блог" />
            </h1>
        </Header>
    </div>
);

export default BlogPage;
