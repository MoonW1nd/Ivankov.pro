import React from 'react';

import AShape, {IAShapeExternalProps} from '../baseComponent';
import images from './image';

const BlogAShape = ({url}: IAShapeExternalProps) => (
    <AShape url={url} imageUrl={images.blog} width={683} height={1002} x={-40} y={-250} />
);

export default BlogAShape;
