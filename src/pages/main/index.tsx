import React from 'react';
import BackgroundPicture from './sprite/programmer.inline.svg';

import * as styles from './styles.module.css';

const MainPage = (): JSX.Element => (
    <main className={styles.main}>
        <section className={styles.descriptionBlock}>
            <h1 className={styles.name}>
                иванков
                <br />
                александр
            </h1>

            <p className={styles.description}>разработчик интерфейсов</p>
        </section>
        <div className={styles.backgound}>
            <BackgroundPicture className={styles.picture} />
        </div>
    </main>
);

export default MainPage;
