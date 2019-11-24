import cn from 'classnames';
import React from 'react';

import Icon from '@components/icon';
import Logo from '@components/logo';

import styles from './styles.module.css';

interface IHeaderProps {
    className?: string;
}

const Header = ({className}: IHeaderProps) => (
    <header className={cn(styles.root, className)}>
        <h1>
            <Logo />
        </h1>
        <Icon size="m" type="gitHub" className={styles.gitHubLogo} />
    </header>
);

export default Header;
