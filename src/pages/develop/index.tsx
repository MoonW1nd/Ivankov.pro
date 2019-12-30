import React from 'react';

import Header from '@components/header';
import Logo from '@components/logo';
import UnderConstructionMessage from '@components/under-construction-message';

import styles from './styles.module.css';

const DevelopPage = () => (
    <div className={styles.root}>
        <Header>
            <h1>
                <Logo subLogo="разработка" />
            </h1>
        </Header>
        <UnderConstructionMessage />
    </div>
);

export default DevelopPage;
