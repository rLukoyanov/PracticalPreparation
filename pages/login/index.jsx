import React, { useState, useContext, useEffect } from 'react';
import * as pino from 'pino';

import { Checkbox } from 'antd';
import Input from '../../components/Common/Input/Input';
import Button from '../../components/Common/Button/Button';
import AuthContext from '../../store/auth-context';

import styles from '../../components/Login/Login.module.scss';

export default function LoginPage() {
  const logger = pino({
    prettyPrint: true,
  });

  const [reg, setReg] = useState(false);
  const [inputType, setInputType] = useState('password');
  const [enteredLogin, setEnteredLogin] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredSurname, setEnteredSurname] = useState('');
  const [enteredBirthday, setEnteredBirthday] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState(null);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    setLoading(false);
  }, [enteredLogin, enteredPassword]);

  const toggleReg = () => {
    setReg(!reg);
  };

  const enteredLoginHandler = (event) => {
    setEnteredLogin(event.target.value);
  };

  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const enteredSurnameHandler = (event) => {
    setEnteredSurname(event.target.value);
  };

  const enteredBirthdayHandler = (event) => {
    setEnteredBirthday(event.target.value);
  };

  const onShowPassword = () => {
    setInputType(inputType === 'text' ? 'password' : 'text');
  };

  const onFinish = async () => {
    if (enteredLogin && enteredPassword) {
      setLoading(true);
      logger.info('start getting user data');
      // get user data
      authCtx.onLogin(enteredLogin, enteredPassword);
    } else {
      setError('Заполните поля');
    }
  };

  return (
    <div className={styles.background}>
      {reg ? (
        <form className={styles.login}>
          <div className={styles.header}>
            <h1>Регистрация на сайте</h1>
            <span>Production Practice</span>
          </div>
          <Input
            required
            name="Имя"
            type="text"
            placeholder="Введите свое имя"
            onChange={enteredNameHandler}
            value={enteredName}
          />
          <Input
            required
            name="Фамилия"
            type="text"
            placeholder="Введите свою фамилию"
            onChange={enteredSurnameHandler}
            value={enteredSurname}
          />
          <Input
            required
            name="Дата рождения"
            type="text"
            placeholder="06.12.2000"
            onChange={enteredBirthdayHandler}
            value={enteredBirthday}
          />
          <Input
            required
            name="Номер телефона"
            type="text"
            placeholder="965-748-89-90"
            onChange={enteredBirthdayHandler}
            value={enteredBirthday}
          />
          <Input
            required
            name="Адрес электронной почты"
            type="text"
            placeholder="Введите ваш e-mail"
            onChange={enteredBirthdayHandler}
            value={enteredBirthday}
          />
          <Input
            required
            name="Номер телефона"
            type="text"
            placeholder="965-748-89-90"
            onChange={enteredBirthdayHandler}
            value={enteredBirthday}
          />
          <Input
            required
            name="Пароль"
            type={inputType}
            placeholder="********"
            onChange={enteredPasswordHandler}
            value={enteredPassword}
            onClick={onShowPassword}
            endlessType="password"
          />
          <p className={styles.error}>{error}</p>
          <div className={styles.checkboxPassword}>
            <label className={styles.checkText}>
              <Checkbox />
              <span>Даю согласие на обработку персональных данных</span>
            </label>
          </div>
          <div className={styles.checkboxPassword}>
            <label className={styles.checkText}>
              <Checkbox />
              <span>
                Принимаю Пользовательское соглашение и Политику
                конфиденциальности
              </span>
            </label>
          </div>
          <Button disabled={loading}>Регистрация</Button>
          <p className={styles.footer}>
            Есть аккаунт?
            <button className={styles.link} type="button" onClick={toggleReg}>
              Войти
            </button>
          </p>
        </form>
      ) : (
        <form className={styles.login}>
          <div className={styles.header}>
            <h1>Добро пожаловать на сайт</h1>
            <span>Production Practice</span>
          </div>
          <Input
            required
            name="Логин"
            type="text"
            placeholder="Введите ваш e-mail"
            onChange={enteredLoginHandler}
            value={enteredLogin}
          />
          <Input
            required
            name="Пароль"
            type={inputType}
            placeholder="********"
            onChange={enteredPasswordHandler}
            value={enteredPassword}
            onClick={onShowPassword}
            endlessType="password"
          />
          <p className={styles.error}>{error}</p>
          <div className={styles.checkboxPassword}>
            <label>
              <input type="checkbox" />
              Запомнить меня
            </label>
            <a href="/profile">Забыли пароль?</a>
          </div>
          <Button disabled={loading} onClick={onFinish}>
            Войти
          </Button>
          <p className={styles.footer}>
            Нет аккаунта?
            <button className={styles.link} type="button" onClick={toggleReg}>
              Регистрация
            </button>
          </p>
        </form>
      )}
    </div>
  );
}
