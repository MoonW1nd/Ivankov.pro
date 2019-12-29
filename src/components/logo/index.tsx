import {Typography} from 'antd';
import React from 'react';

import styles from './styles.module.css';

const {Text} = Typography;

const Logo = () => (
    <span className={styles.root}>
        <Text className={styles.name}>
            александр<span className={styles.dash}>_</span>иванков
        </Text>
        <Text className={styles.description}>разработчик интерфейсов</Text>
    </span>
);

export default Logo;
