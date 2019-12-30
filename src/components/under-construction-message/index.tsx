import {Button, Typography} from 'antd';
import * as React from 'react';

import {Link} from 'gatsby';
import styles from './styles.module.css';

const {Text, Paragraph} = Typography;

const UnderConstructionMessage = () => {
    return (
        <section className={styles.root}>
            <h2>
                <Text className={styles.title}>Раздел находится в разработке</Text>
            </h2>
            <Paragraph className={styles.description}>
                Скоро здесь появится что-то удивительное,
                <br /> осталось лишь немного подождать.
            </Paragraph>
            <Link to="/">
                <Button className={styles.button}>Жду с нетерпением!</Button>
            </Link>
        </section>
    );
};

export default UnderConstructionMessage;
