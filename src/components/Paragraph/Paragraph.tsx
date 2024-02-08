import { FC, useMemo } from 'react';
import classNames from 'classnames';
import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';

export const Paragraph: FC<ParagraphProps> = ({
  className,
  size,
  color,
  capitals,
  ...props
}) => {
  const paragraphClassname = useMemo(() => {
    return classNames(
      styles['paragraph'],
      styles[`paragraph-${size}`],
      styles[`paragraph-${color}`],
      className,
      {
        [styles['paragraph-capitals']]: capitals === true,
      }
    );
  }, [className, size, color, capitals]);

  return <p {...props} className={paragraphClassname} />;
};
