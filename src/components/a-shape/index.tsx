import React from 'react';
import {cn} from '@bem-react/classname';

import './styles.less';

import images from './image';


const AShapeClassName = cn('AShape');

interface IAShapeProps {
  type: 'develop' | 'blog' | 'design';
  reverse?: boolean;
}

interface IClipPathProps {
  id: string;
  x: number | string;
  y: number | string;
  className: string;
}


const ClipPath = ({id, x, y, className}: IClipPathProps) => (
  <clipPath id={id}>
    <text x={x} y={y} className={className}>A</text>
  </clipPath>
);


const AShape = ({type}: IAShapeProps) => (
  <div className={AShapeClassName({type})}>
    <svg xmlns='http://www.w3.org/2000/svg'>
      <defs>
        {type === 'design' && (
          <ClipPath
            x='-500'
            y='-50'
            id='clip-design'
            className={AShapeClassName('Text', {reverse: true})}
          />
        )}
        {type === 'develop' && (
          <ClipPath
            x='85'
            y='600'
            id='clip-develop'
            className={AShapeClassName('Text')}
          />
        )}
        {type === 'blog' && (
          <ClipPath
            x='85'
            y='757'
            id='clip-blog'
            className={AShapeClassName('Text')}
          />
        )}
      </defs>
    </svg>

    <img src={images[type]} className={AShapeClassName('Image', {type})} />
  </div >
);


export default AShape;
