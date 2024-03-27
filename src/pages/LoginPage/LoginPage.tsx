import { useState } from 'react';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Button, InputField, Paragraph, Title } from '../../components';
import styles from './LoginPage.module.css';

export const LoginPage = () => {
  const [checked, setChecked] = useState(true);

  const handleCheckboxClick = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };
  return (
    <div className={styles['loginPage__background']}>
      <div className={styles['loginPage__container']}>
        <form className={styles['loginPage__form']}>
          <div className={styles['loginPage__form__title']}>
            <Title color='default' className={styles['form__title-title']}>Welcome back!</Title>
            <Paragraph color='default' size='xl'>
              Please login to continue
            </Paragraph>
          </div>
          <div className={styles['loginPage__form__inputs']}>
            <Title color='primary' className={styles['inputs__title']}>
              Login
            </Title>
            <Paragraph
              color='gray'
              size='xs'
              className={styles['inputs__paragraph']}>
              Or register with email
            </Paragraph>
            <InputField
              placeholder='Email'
              type='email'
              className={styles['inputs__field']}
            />
            <InputField
              placeholder='Password'
              type='password'
              className={styles['inputs__field']}
            />
            <Checkbox
              checked={checked}
              onChange={handleCheckboxClick}
              className={styles['inputs__checkbox']}>
              Remember
            </Checkbox>
            <Button border='secondaryBorder' fill='secondaryFill' capitalised>
              Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
