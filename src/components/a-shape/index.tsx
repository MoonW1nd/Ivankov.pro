import cn from 'classnames';
import React from 'react';

import styles from './styles.module.css';

import images from './image';

type AShapeType = 'develop' | 'blog' | 'design';

interface IAShapeProps {
    type: AShapeType;
    reverse?: boolean;
}

interface IClipPathProps {
    id: string;
    x: number | string;
    y: number | string;
    className: string;
}

const getImageClassName = (type: AShapeType) =>
    cn(styles.image, {
        [styles.typeBlog]: type === 'blog',
        [styles.typeDesign]: type === 'design',
        [styles.typeDevelop]: type === 'develop',
    });

const ClipPath = ({id, x, y, className}: IClipPathProps) => (
    <clipPath id={id}>
        <text x={x} y={y} className={className}>
            A
        </text>
    </clipPath>
);

const AShape = ({type}: IAShapeProps) => (
    <div className={styles.root}>
        <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
                {type === 'design' && <ClipPath x="-500" y="-50" id="clip-design" className={styles.textReverse} />}
                {type === 'develop' && <ClipPath x="85" y="600" id="clip-develop" className={styles.text} />}
                {type === 'blog' && <ClipPath x="85" y="757" id="clip-blog" className={styles.text} />}
            </defs>
        </svg>

        <img src={images[type]} className={getImageClassName(type)} />
    </div>
);

export default AShape;
