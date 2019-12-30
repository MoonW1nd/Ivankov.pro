import React from 'react';

import styles from './styles.module.css';

interface IAShapeProps {
    reflected?: boolean;
    x: number;
    y: number;
    width: number;
    height: number;
    imageUrl: string;
}

const AShape = ({imageUrl, reflected, width, height, x, y}: IAShapeProps) => {
    const maskId = reflected ? 'a-shape-mask-reflected' : 'a-shape-mask';

    return (
        <div className={styles.root}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 ${reflected ? 31 : 0} 490 693`}>
                <mask id="a-shape-mask">
                    <g fill="white">
                        <path d="M485.6 484H372.2L343.5 404.9H143.3L113.9 484H0.5L181.1 17.1H305.7L485.6 484ZM316.2 317.4L243.4 116.5L170.6 317.4H316.2Z" />
                    </g>
                </mask>

                <mask id="a-shape-mask-reflected">
                    <g fill="white">
                        <path d="M0.399984 49L113.8 49L142.5 128.1H342.7L372.1 49H485.5L304.9 515.9H180.3L0.399984 49ZM169.8 215.6L242.6 416.5L315.4 215.6L169.8 215.6Z" />
                    </g>
                </mask>

                <g mask={`url(#${maskId})`}>
                    <image xlinkHref={imageUrl} width={width} height={height} x={x} y={y} />
                </g>
            </svg>
        </div>
    );
};

export default AShape;
