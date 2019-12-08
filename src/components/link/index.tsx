import * as React from 'react';

import styles from './styles.module.css';

interface ILink {
    children: React.ReactNode;
    href: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
}

const Link = ({children, href, target}: ILink) => (
    <a href={href} className={styles.link} target={target}>
        {children}
    </a>
);

export default Link;
