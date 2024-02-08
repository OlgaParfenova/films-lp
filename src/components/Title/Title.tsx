import { FC, useMemo } from 'react';
import classNames from 'classnames';
import { TitleProps } from './Title.props';
import styles from './Title.module.css';

export const Title: FC<TitleProps> = ({
  className,
  size,
  color,
  capitals,
  ...props
}) => {
  const titleClassnames = useMemo(() => {
    return classNames(
      styles['title'],
      styles[`title-${size}`],
      styles[`title-${color}`],
      className,
      {
        [styles['title-capitals']]: capitals === true,
      }
    );
  }, [className, size, color, capitals]);

  return <div {...props} className={titleClassnames} />;
};
