import React from 'react';
import closeButtonPath from '../images/close-icon.svg';
import yesPath from '../images/yes.svg';
import noPath from '../images/no.svg';

//import logoPath from '../images/logo.svg';

function InfoTooltip({ isSuccess, isOpen, onClose }) {

  const className = `popup popup_type_input ${isOpen && 'popup_opened'}`;
  const centeredText = { textAlign: 'center' };
  return (
    <div className={className}>
      <div className='popup__container popup__container_type_input popup__container_type_info'>
        <img src={isSuccess ? yesPath : noPath} alt="успешно" />
        <p className='popup__text' style={centeredText} >
          {isSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте еще раз.'}
        </p>
        <button
          type="reset"
          className="button popup__close-button popup__close-button_type_input"
          onClick={onClose}>
          <img src={closeButtonPath} alt="закрыть" />
        </button>
      </div>
    </div>
  )
}
export default InfoTooltip;
