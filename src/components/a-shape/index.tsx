import React from 'react';

import * as types from './types';

type AShapeType = 'develop' | 'blog' | 'design';

interface IAShapeProps {
    type: AShapeType;
    reflected?: boolean;
}

const AShape = ({type}: IAShapeProps) => {
    const Component = types[type];

    return <Component />;
};

export default AShape;
