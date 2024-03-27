import { Button, InputField, Paragraph, Title } from '../../components';
import styles from './RegisterPage.module.css';

export const RegisterPage = () => {
  return (
    <div className={styles['registerPage__background']}>
      <div className={styles['registerPage__container']}>
        <form className={styles['registerPage__form']}>
          <div className={styles['registerPage__form__title']}>
            <Title color='default' className={styles['form__title-title']}>
              Nice to meet you!
            </Title>
            <Paragraph color='default' size='xl'>
              Just register to join us
            </Paragraph>
          </div>
          <div className={styles['registerPage__form__inputs']}>
            <Title color='primary' className={styles['inputs__title']}>
              Register
            </Title>
            <Paragraph
              color='gray'
              size='xs'
              className={styles['inputs__paragraph']}>
              Or login with email
            </Paragraph>
            <InputField
              placeholder='Name'
              type='text'
              className={styles['inputs__field']}
            />
            <InputField
              placeholder='Email'
              type='email'
              className={styles['inputs__field']}
            />
            <div className={styles['inputs__field-password']}>
              <InputField placeholder='Password' type='password' />
              <InputField placeholder='Repeat password' type='password' />
            </div>
            <Button border='secondaryBorder' fill='secondaryFill' capitalised>
              Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
