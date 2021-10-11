import React from 'react';
import Icon from './sprite/programmer.inline.svg';

const MainPage = (props: any): JSX.Element => (
    <main>
        <div className="backgroud">
            <Icon />;
        </div>

        <section>
            <h1>
                иванков
                <br />
                александр
            </h1>

            <p>разработчик интерфейсов</p>
        </section>
    </main>
);

export default MainPage;
