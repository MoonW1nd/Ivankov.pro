import cn from 'classnames';
import * as React from 'react';

import styles from './styles.module.css';

interface ILink {
    children: React.ReactNode;
    className?: string;
    href: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
}

const Link = ({children, href, target, className}: ILink) => (
    <a href={href} className={cn(className, styles.link)} target={target}>
        {children}
    </a>
);

export default Link;
