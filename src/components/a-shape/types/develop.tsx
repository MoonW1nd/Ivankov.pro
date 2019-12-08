import * as React from 'react';
import AShape, {IAShapeExternalProps} from '../baseComponent';

import images from './image';

const DevelopAShape = ({url}: IAShapeExternalProps) => (
    <AShape url={url} imageUrl={images.develop} width={1215} height={811} x={-30} y={-100} />
);

export default DevelopAShape;
