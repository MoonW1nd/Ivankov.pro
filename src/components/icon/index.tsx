import cn from 'classnames';
import React from 'react';

import icons from './icons';
import styles from './styles.module.css';

export type IconType = 'gitHub';

interface IGetClassNameProps {
    className?: string;
    size: 's' | 'm' | 'l';
}

export interface IIconProps extends IGetClassNameProps {
    type: IconType;
}

const getRootClassName = ({className, size}: IGetClassNameProps) =>
    cn(className, styles.root, {
        [styles.sizeM]: size === 'm',
    });

const Icon: React.SFC<IIconProps> = ({className, type, size}: IIconProps) => {
    return <img className={getRootClassName({className, size})} src={icons[type]} alt={`иконка ${type}`} />;
};

export default Icon;
