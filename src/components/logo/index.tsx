import {Typography} from 'antd';
import cn from 'classnames';
import {Link} from 'gatsby';
import React from 'react';

import styles from './styles.module.css';

const {Text} = Typography;

interface ILogo {
    type?: 'full' | 'medium' | 'short';
    showDescription?: boolean;
    subLogo?: string;
}

const Logo = ({type, showDescription, subLogo}: ILogo) => (
    <span className={styles.root}>
        <div>
            <Link to="/">
                <Text className={styles.name}>
                    {type === 'full' && 'александр'}
                    <span className={styles.dash}>_</span>иванков
                </Text>
            </Link>
            {subLogo && <Text className={cn(styles.subLogo, styles.name)}>&nbsp;|&nbsp;{subLogo}</Text>}
        </div>
        {showDescription && <Text className={styles.description}>разработчик интерфейсов</Text>}
    </span>
);

export default Logo;
