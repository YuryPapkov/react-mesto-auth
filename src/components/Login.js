import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function Login() {
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
        <Link to="/sign-up" className="header__link">Регистрация</Link>
      </Header>

      <form
        name='login'
        onSubmit={handleSubmit}
        className="auth-form"
        noValidate>
        <p className="auth-form__text">Вход</p>
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
          Войти
        </button>
      </form>


    </div>
  );
}
export default Login;
