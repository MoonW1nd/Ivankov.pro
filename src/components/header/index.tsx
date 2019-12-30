import cn from 'classnames';
import React, {ReactNode} from 'react';

import styles from './styles.module.css';

interface IHeaderProps {
    className?: string;
    children: ReactNode;
}

const Header = ({className, children}: IHeaderProps) => (
    <header className={cn(styles.root, className)}>{children}</header>
);

export default Header;
