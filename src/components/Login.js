import React from 'react';
import { Validator, validationForLoginConfig } from '../utils/Validator';

function Login({ handleLogin }) {
  const [data, setData] = React.useState({
    email: '',
    password: ''
  });


  //Здесь возникает проблема того, что при каждом монтировании-демонтировании
  //в памяти остается новый экземпляр класса Validator. Он не удалятся автоматически,
  //так как на нем куча eventLiteners, которые нужно было бы все удалить (например методом
  //disableValidation класса Validator). Как удалить его принудительно - тоже интернет
  //не смог мне помочь. Но, вероятно, это не является серьезной проблемой,
  //так как пользователь не должен многократно ходить по путям Register и Login.
  React.useEffect(() => {
    const form = document.forms.login;
    const validator = new Validator(validationForLoginConfig, form);
    validator.enableValidation();
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
    handleLogin(data);
    setData({
      ...data,
      password: ''
    })
  }

  return (
    <div>
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
          pattern="^[\w\-\.]+@[\w\-\.]+"
          minLength="3"
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
          pattern="^[\w\-\.#$%&*]+"
          minLength="3"
          maxLength="25"
          autoComplete="off"
          value={data.password}
          onChange={handleChange}
          placeholder="Пароль"
        />
        <span className="popup__error popup__error_type_password"></span>
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
