import React from 'react';

import * as types from './types';

type AShapeType = 'develop' | 'blog' | 'design';

interface IAShapeProps {
    type: AShapeType;
    url: string;
    reflected?: boolean;
}

const AShape = ({type, url}: IAShapeProps) => {
    const Component = types[type];

    return <Component url={url} />;
};

export default AShape;
