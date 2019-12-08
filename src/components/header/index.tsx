import cn from 'classnames';
import React from 'react';

import Icon from '@components/icon';
import Link from '@components/link';
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
        <Link href="https://github.com/MoonW1nd" className={styles.link} target={'_blank'}>
            <Icon size="m" type="gitHub" className={styles.gitHubLogo} />
        </Link>
    </header>
);

export default Header;
