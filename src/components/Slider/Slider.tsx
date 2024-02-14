import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import styles from './Slider.module.css';
import { SliderProps } from './Slider.props';

export const Slider: FC<SliderProps> = ({
  min,
  max,
  step,
  numValues,
  valueName,
}) => {
  const [value, setValue] = useState(min);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const totalSteps = Math.floor((max - min) / step);
  const intermediateValues = Array.from(
    { length: totalSteps + 1 },
    (_, index) => min + index * step
  );
  const intermediateStepSize = totalSteps / (numValues || 1);

  useEffect(() => {
    const updateTooltipPosition = () => {
      if (!inputRef.current || !tooltipRef.current) return;
      const slider = inputRef.current;
      const sliderWidth = slider.clientWidth;
      const percentage = ((value - min) / (max - min)) * 100;
      const thumbPosition = (percentage * sliderWidth) / 100;
      const tooltipWidth = tooltipRef.current.clientWidth;
      const thumbCenter = thumbPosition - tooltipWidth / 2;
      tooltipRef.current.style.transform = `translateX(${thumbCenter}px)`;
    };
    updateTooltipPosition();
    window.addEventListener('resize', updateTooltipPosition);
    return () => {
      window.removeEventListener('resize', updateTooltipPosition);
    };
  }, [value, min, max, step, isFocused]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={styles['slider-container']}>
      <input
        ref={inputRef}
        type='range'
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={styles['slider']}
      />
      {isFocused && (
        <div className={styles['slider__tooltip']} ref={tooltipRef}>
          {valueName ? `${valueName}: ${value}` : `${value}`}
        </div>
      )}
      <div className={styles['slider__values']}>
        {numValues === undefined ? (
          <>
            <span>{min}</span>
            <span>{max}</span>
          </>
        ) : (
          intermediateValues
            .filter(
              (_, index) =>
                index % Math.ceil(intermediateStepSize) === 0 ||
                index === totalSteps
            )
            .map((val) => <span key={val}>{val}</span>)
        )}
      </div>
    </div>
  );
};
