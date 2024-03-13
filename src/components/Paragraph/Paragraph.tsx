import { FC, useMemo } from 'react';
import classNames from 'classnames';
import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';

export const Paragraph: FC<ParagraphProps> = ({
  className,
  size,
  color,
  capitals,
  weight,
  ...props
}) => {
  const paragraphClassname = useMemo(() => {
    return classNames(
      styles['paragraph'],
      styles[`paragraph-${size}`],
      styles[`paragraph-${color}`],
      styles[`paragraph-${weight}`],
      className,
      {
        [styles['paragraph-capitals']]: capitals === true,
      }
    );
  }, [className, size, color, capitals, weight]);

  return <p {...props} className={paragraphClassname} />;
};
