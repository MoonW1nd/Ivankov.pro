import * as React from 'react';
import AShape, {IAShapeExternalProps} from '../baseComponent';

import images from './image';

const DevelopAShape = ({url}: IAShapeExternalProps) => (
    <AShape url={url} imageUrl={images.design} width={1486} height={900} x={-100} y={0} reflected={true} />
);

export default DevelopAShape;
