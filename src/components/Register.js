import React from 'react';
import { Link } from 'react-router-dom';
import { Validator, validationForLoginConfig } from '../utils/Validator';

function Register({ handleRegister }) {

  const [data, setData] = React.useState({
    email: '',
    password: ''
  });

  React.useEffect(() => {
    const form = document.forms.login;
    let validator = new Validator(validationForLoginConfig, form);
    validator.enableValidation();
    return () => {
      console.log(validator);
      //Здесь возникает проблема того, что при каждом монтировании-демонтировании
      //в памяти остается новый экземпляр класса Validator. Он не удалятся автоматически,
      //так как на нем куча eventLiteners, которые нужно было бы все удалить (например методом
      //disableValidation класса Validator). Как удалить его принудительно - тоже интернет
      //не смог мне помочь. Но, вероятно, это не является серьезной проблемой,
      //так как пользователь не должен многократно ходить по путям Register и Login.

    };
  }, []);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: value
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleRegister(data)
  }
  return (
    <div>
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
        <span className="popup__error popup__error_type_email"></span>
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
        <span className="popup__error popup__error_type_password"></span>
        <button
          type="submit"
          className="button auth-form__save-button">
          Зарегистрироваться
          </button>
        <Link to="/sign-in" className="auth-form__link">Уже зарегистрированы? Войти.</Link>
      </form>
    </div>
  );
}

export default Register;
