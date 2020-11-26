import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

function Register() {

  const [data, setData] = React.useState({
    email: '',
    password: ''
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: value
    });
    console.log(data);
  }

  function handleSubmit(evt) {
    evt.preventdefault();
  }
  return (
    <div>
      <Header >
        <Link to="/sign-in" className="header__link">Войти</Link>
      </Header>

      <form
        name='login'
        onSubmit={handleSubmit}
        className="auth-form"
        noValidate>
        <p className="auth-form__text">Регистрация</p>
        <input
          name="email"
          className="auth-form__input"
          type="email"
          required
          minLength="2"
          maxLength="40"
          autoComplete="off"
          value={data.name}
          onChange={handleChange}
          placeholder="Email"
        />
        <span className="popup__error popup__error_type_name"></span>
        <input
          name="password"
          className="auth-form__input"
          type="password"
          required
          minLength="2"
          maxLength="200"
          autoComplete="off"
          value={data.password}
          onChange={handleChange}
          placeholder="Пароль"
        />
        <span className="popup__error popup__error_type_occupation"></span>
        <button
          type="submit"
          className="button auth-form__save-button">
          Зарегистрироваться
          </button>
        <Link to="/login" className="auth-form__link">Уже зарегистрированы? Войти.</Link>
      </form>


    </div>
  );
}


export default Register;
