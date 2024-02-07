import { FC, useMemo } from 'react';
import classNames from 'classnames';
import { TitleProps } from './Title.props';
import styles from './Title.module.css';

export const Title: FC<TitleProps> = ({ className, size, color, ...props }) => {
  const titleClassnames = useMemo(() => {
    return classNames(styles['title'], className, {
      [styles['small']]: size === 'small',
      [styles['medium']]: size === 'medium',
      [styles['large']]: size === 'large',
      [styles['white']]: color === 'white',
      [styles['black']]: color === 'black',
      [styles['blue']]: color === 'blue',
    });
  }, [className, size, color]);

  return <div {...props} className={titleClassnames} />;
};
