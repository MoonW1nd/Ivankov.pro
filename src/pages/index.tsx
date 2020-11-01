import {graphql, Link} from 'gatsby';
import React from 'react';

import styles from './styles.module.css';

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;

// <ExternalLink href="https://github.com/MoonW1nd" className={styles.link} target={'_blank'}>
//     <Icon type="gitHub" className={styles.gitHubLogo} />
// </ExternalLink>
//
export const MainPage = () => (
    <div className={styles.root}>
        <section className={styles.contentWrapper}>
            <div className={styles.content}>
                <div>
                    <h1 className={styles.name}>
                        александр
                        <br />
                        иванков
                    </h1>
                </div>

                <div>
                    <p className={styles.about}>
                        разработчик
                        <br />
                        дизайнер
                        <br />
                        vim евангелист
                        <br />
                    </p>

                    <div className={styles.navigationWrapper}>
                        <div className={styles.navigation}>
                            <Link to="/develop/" className={styles.navigationItem}>
                                разработка
                            </Link>

                            <Link to="/design/" className={styles.navigationItem}>
                                дизайн
                            </Link>

                            <Link to="/blog/" className={styles.navigationItem}>
                                блог
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default MainPage;
