import React from 'react';
import PopupWithForm from './PopupWithForm';
import { Validator, validationConfig } from '../utils/Validator';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [submitButtonText, setSubmitButtonText] = React.useState('Сохранить');
  const validatorRef = React.useRef();

  // В компонентах EditProfilePopup, EditAvatarPopup, AddPlacePopup
  //Ref используется в качестве способа хранения данных внутри функционального компонента.
  // Так как эти компоненты монтируются однократно при загрузке приложения,
  //то возникает потребность очищать поля ошибок при закрытии модального окна.
  //Для этого используется публичный метод clearErrors класса Validator.
  //Если объявить константу validator внутри useEffect при монтировании, то мы не сможем обратиться
  //к этой константе в функции handleClose (закрытия окна).
  // Объявить validator просто в теле компонента тоже нельзя, так как нужен DOM-узел формы,
  //а его по факту еще не будет в момент объявления, так как компонент формы еще не смонтирован.
  //Поэтому для того чтобы обращаться к validator  из функции выхода из модального окна (handleClose),
  //я выбрал useRef.
  //В компонентах Register и Login действительно ref не нужен, так как эти компоненты монтируются и
  //размонтируются в процессе работы и методом clearErrors не пользуются.
  //Прошу Вас прокомментировать, если этот пункт может быть решен как то более изящно.
  //Заранее спасибо.

  React.useEffect(() => {
    const form = document.forms.edit;
    validatorRef.current = new Validator(validationConfig, form);
    validatorRef.current.enableValidation();
  }, []);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
    setSubmitButtonText('Сохранить');
  }, [currentUser]);

  React.useEffect(() => {
    setSubmitButtonText('Сохранить');
  }, [isOpen]);

  function handleNameInput(e) {
    setName(e.target.value);
  }
  function handleDescriptionInput(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    setSubmitButtonText('Сохранение...');
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }
  function handleClose() {
    setName(currentUser.name);
    setDescription(currentUser.about);
    validatorRef.current.clearErrors();
    onClose();
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit"
      submitText={submitButtonText}
      onClose={handleClose}
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      <input
        name="name"
        className="popup__input popup__input_type_name"
        type="text"
        required
        minLength="2"
        maxLength="40"
        autoComplete="off"
        value={name}
        onChange={handleNameInput}
      />
      <span className="popup__error popup__error_type_name"></span>
      <input
        name="occupation"
        className="popup__input popup__input_type_occupation"
        type="text"
        required
        minLength="2"
        maxLength="200"
        autoComplete="off"
        value={description}
        onChange={handleDescriptionInput}
      />
      <span className="popup__error popup__error_type_occupation"></span>
    </PopupWithForm>
  )
}
export default EditProfilePopup;
