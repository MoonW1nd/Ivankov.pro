import {Typography} from 'antd';
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
        <Text className={styles.name}>
            {type === 'full' && 'александр'}
            <span className={styles.dash}>_</span>иванков
            {subLogo && <span className={styles.subLogo}>&nbsp;|&nbsp;{subLogo}</span>}
        </Text>
        {showDescription && <Text className={styles.description}>разработчик интерфейсов</Text>}
    </span>
);

export default Logo;
