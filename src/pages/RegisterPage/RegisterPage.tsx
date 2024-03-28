import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Button, InputField, Paragraph, Title } from '../../components';
import { usePostRegisterUserMutation } from '../../API/registerUserApi/postRegisterUserEndpoint';
import styles from './RegisterPage.module.css';

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean>();
  const [confirmPassword, setConfirmPassword] = useState('');

  const [registerUser, { isLoading, isError, error, data }] =
    usePostRegisterUserMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await registerUser({ name, email, password }).unwrap();
      if (data) {
        console.log('Регистрация прошла успешно', data);
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  const handleNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  useEffect(() => {
    if (password === confirmPassword) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
      setPassword('');
    }
  }, [password, confirmPassword]);

  return (
    <div className={styles['registerPage__background']}>
      <div className={styles['registerPage__container']}>
        <form className={styles['registerPage__form']} onSubmit={handleSubmit}>
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
              onChange={handleNameInput}
            />
            <InputField
              placeholder='Email'
              type='email'
              className={styles['inputs__field']}
              onChange={handleEmailInput}
            />
            <div className={styles['inputs__field-password']}>
              <InputField
                placeholder='Password'
                type='password'
                onChange={handlePasswordInput}
                isSuccess={isCorrect}
              />
              <InputField
                placeholder='Comfirm password'
                type='password'
                onChange={handleConfirmPasswordInput}
                isSuccess={isCorrect}
              />
            </div>
            <Button border='secondaryBorder' fill='secondaryFill' capitalised>
              Continue
            </Button>
            {isError && <Paragraph>Error</Paragraph>}
          </div>
        </form>
      </div>
    </div>
  );
};
