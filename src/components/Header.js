import React from 'react';
import logoPath from '../images/logo.svg';
import { useParams, Link } from 'react-router-dom';

function Header({ email, onLogout }) {
  let { page } = useParams();
  console.log(page);

  function renderHeader() {
    if (email) {
      return (<div className="header__info-box">
        <p className="header__link">{email} </p>
        <button className="header__link header__link_theme_grey" onClick={onLogout}>Выйти </button>
      </div>);
    } else {
      switch (page) {
        case 'sign-in': return (<Link to="/sign-up" className="header__link">Регистрация</Link>);
        case 'sign-up': return (<Link to="/sign-in" className="header__link">Вход</Link>);
        default: return <p> </p>;
      }
    }
  }

  return (
    <header className="header" >
      <img className="logo" alt="Место в России" src={logoPath} />
      {renderHeader()}
    </header>
  );
}
export default Header;
