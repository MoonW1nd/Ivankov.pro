import React from 'react';

import Icon from '@components/icon';
import Logo from '@components/logo';

import styles from './styles.module.css';

const Header = () => (
    <header className={styles.root}>
        <h1>
            <Logo />
        </h1>
        <Icon size="m" type="gitHub" className={styles.gitHubLogo} />
    </header>
);

export default Header;
