(this.webpackJsonpmesto2=this.webpackJsonpmesto2||[]).push([[0],{30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),i=a.n(r),c=(a(30),a(24)),u=a(1),s=a(2),l=a(25),p=function(e){var t=e.component,a=Object(l.a)(e,["component"]);return o.a.createElement(s.b,null,a.loggedIn?o.a.createElement(t,a):o.a.createElement(s.a,{to:"/sign-in"}))},m=a(10),_=a(8),f=a.p+"static/media/close-icon.b9c42c3d.svg",d=a.p+"static/media/yes.1b6082f8.svg",h=a.p+"static/media/no.df8eddf6.svg";var b=function(e){var t=e.isSuccess,a=e.isOpen,n=e.onClose,r="popup popup_type_input ".concat(a&&"popup_opened");return o.a.createElement("div",{className:r},o.a.createElement("div",{className:"popup__container popup__container_type_input popup__container_type_info"},o.a.createElement("img",{src:t?d:h,alt:"\u0443\u0441\u043f\u0435\u0448\u043d\u043e"}),o.a.createElement("p",{className:"popup__text",style:{textAlign:"center"}},t?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."),o.a.createElement("button",{type:"reset",className:"button popup__close-button popup__close-button_type_input",onClick:n},o.a.createElement("img",{src:f,alt:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"}))))},E="https://auth.nomoreparties.co",v=a(14),g=a(15),y=function(){function e(t,a){Object(v.a)(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=a}return Object(g.a)(e,[{key:"enableValidation",value:function(){this._getInputList(),this._getSubmitButtonElement(),this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"clearErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleSubmitButtonState(this._submitButton)}},{key:"_toggleSubmitButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_hasInvalidInput",value:function(){return!!this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hideInputError",value:function(e){var t=this._getErrorElement(e);e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_showInputError",value:function(e,t){var a=this._getErrorElement(e);e.classList.add(this._inputErrorClass),a.classList.add(this._errorClass),a.textContent=t}},{key:"_getInputList",value:function(){var e=Array.from(this._formElement.querySelectorAll(this._inputSelector));return this._inputList=e,this._inputList}},{key:"_getSubmitButtonElement",value:function(){var e=this._formElement.querySelector(this._submitButtonSelector);return this._buttonElement=e,this._buttonElement}},{key:"_getErrorElement",value:function(e){return this._formElement.querySelector(".popup__error_type_".concat(e.name))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleSubmitButtonState()})),t.addEventListener("focus",(function(){e._toggleSubmitButtonState()}))}))}}]),e}(),C={formSelector:".popup__container_type_input",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},k={formSelector:".auth-form",inputSelector:".auth-form__input",submitButtonSelector:".auth-form__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};var j=function(e){var t=e.handleLogin,a=o.a.useState({email:"",password:""}),n=Object(u.a)(a,2),r=n[0],i=n[1],c=Object(s.g)(),l=o.a.useState(!1),p=Object(u.a)(l,2),f=p[0],d=p[1],h=o.a.useState(!1),v=Object(u.a)(h,2),g=v[0],C=v[1],j=o.a.useRef();function S(e){var t=e.target,a=t.name,n=t.value;i(Object(_.a)(Object(_.a)({},r),{},Object(m.a)({},a,n)))}return o.a.useEffect((function(){var e=document.forms.login;j.current=new y(k,e),j.current.enableValidation()}),[]),o.a.createElement("div",null,o.a.createElement("form",{name:"login",onSubmit:function(e){e.preventDefault(),function(e){var t=e.email,a=e.password;return fetch("".concat(E,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:a,email:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430  ".concat(e.status))}))}(r).then((function(e){e.token&&(localStorage.setItem("jwt",e.token),i(Object(_.a)(Object(_.a)({},r),{},{password:""})),t(r.email),c.push("/"))})).catch((function(e){C(!1),d(!0),console.log(e)}))},className:"auth-form",noValidate:!0},o.a.createElement("p",{className:"auth-form__text"},"\u0412\u0445\u043e\u0434"),o.a.createElement("input",{name:"email",className:"auth-form__input",type:"email",required:!0,pattern:"^[\\w\\-\\.]+@[\\w\\-\\.]+",minLength:"3",maxLength:"40",autoComplete:"off",value:r.name,onChange:S,placeholder:"Email"}),o.a.createElement("span",{className:"popup__error popup__error_type_email"}),o.a.createElement("input",{name:"password",className:"auth-form__input",type:"password",required:!0,pattern:"^[\\w\\-\\.#$%&*]+",minLength:"3",maxLength:"25",autoComplete:"off",value:r.password,onChange:S,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),o.a.createElement("span",{className:"popup__error popup__error_type_password"}),o.a.createElement("button",{type:"submit",className:"button auth-form__save-button"},"\u0412\u043e\u0439\u0442\u0438")),o.a.createElement(b,{isOpen:f,isSuccess:g,onClose:function(){d(!1),g&&c.push("/sign-in")}}))},S=a(6);var N=function(){var e=Object(s.g)({}),t=o.a.useState({email:"",password:""}),a=Object(u.a)(t,2),n=a[0],r=a[1],i=o.a.useState(!1),c=Object(u.a)(i,2),l=c[0],p=c[1],f=o.a.useState(!1),d=Object(u.a)(f,2),h=d[0],v=d[1],g=o.a.useRef();function C(e){var t=e.target,a=t.name,o=t.value;r(Object(_.a)(Object(_.a)({},n),{},Object(m.a)({},a,o)))}return o.a.useEffect((function(){var e=document.forms.login;g.current=new y(k,e),g.current.enableValidation()}),[]),o.a.createElement("div",null,o.a.createElement("form",{name:"login",onSubmit:function(e){e.preventDefault(),function(e){var t=e.email,a=e.password;return fetch("".concat(E,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:a,email:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430  ".concat(e.status))}))}(n).then((function(e){v(!0),p(!0)})).catch((function(e){v(!1),p(!0)}))},className:"auth-form",noValidate:!0},o.a.createElement("p",{className:"auth-form__text"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),o.a.createElement("input",{name:"email",className:"auth-form__input",type:"email",required:!0,minLength:"2",maxLength:"40",autoComplete:"off",value:n.name,onChange:C,placeholder:"Email"}),o.a.createElement("span",{className:"popup__error popup__error_type_email"}),o.a.createElement("input",{name:"password",className:"auth-form__input",type:"password",required:!0,minLength:"2",maxLength:"200",autoComplete:"off",value:n.password,onChange:C,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),o.a.createElement("span",{className:"popup__error popup__error_type_password"}),o.a.createElement("button",{type:"submit",className:"button auth-form__save-button"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),o.a.createElement(S.b,{to:"/sign-in",className:"auth-form__link"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438.")),o.a.createElement(b,{isOpen:l,isSuccess:h,onClose:function(){p(!1),h&&e.push("/sign-in")}}))},O=a.p+"static/media/logo.c2821b38.svg";var L=function(e){var t=e.email,a=e.onLogout,n=Object(s.h)().page;return o.a.createElement("header",{className:"header"},o.a.createElement("img",{className:"logo",alt:"\u041c\u0435\u0441\u0442\u043e \u0432 \u0420\u043e\u0441\u0441\u0438\u0438",src:O}),function(){if(t)return o.a.createElement("div",{className:"header__info-box"},o.a.createElement("p",{className:"header__link"},t," "),o.a.createElement("button",{className:"header__link header__link_theme_grey",onClick:a},"\u0412\u044b\u0439\u0442\u0438 "));switch(n){case"sign-in":return o.a.createElement(S.b,{to:"/sign-up",className:"header__link"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f");case"sign-up":default:return o.a.createElement(S.b,{to:"/sign-in",className:"header__link"},"\u0412\u0445\u043e\u0434")}}())},w=o.a.createContext();var x=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,r=e.onCardDelete,i=o.a.useContext(w),c=t.owner._id===i._id,u="button card__delete-button ".concat(c?"card__delete-button_visible":"card__delete-button_hidden"),s=t.likes.some((function(e){return e._id===i._id})),l="button card__like-button ".concat(s&&"card__like-button_pressed");return o.a.createElement("li",{className:"card"},o.a.createElement("img",{src:t.link,alt:"",className:"card__image",onClick:function(){a(t)}}),o.a.createElement("button",{className:u,type:"button",onClick:function(){r(t)}}),o.a.createElement("div",{className:"card__caption"},o.a.createElement("h2",{className:"card__title"},t.name),o.a.createElement("div",{className:"card__like-container"},o.a.createElement("button",{className:l,type:"button",onClick:function(){n(t)}}),o.a.createElement("p",{className:"card__like-counter"},t.likes.length))))};var T=function(e){var t=e.onEditProfile,a=e.onAddPlace,n=e.onEditAvatar,r=e.onCardClick,i=e.cards,c=e.onCardLike,u=e.onCardDelete,s=o.a.useContext(w);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("img",{src:s.avatar,alt:"\u0444\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__avatar",onClick:n}),o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__name"},s.name),o.a.createElement("button",{className:"button profile__edit-button",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:t}),o.a.createElement("p",{className:"profile__occupation"},s.about)),o.a.createElement("button",{className:"button profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onClick:a})),o.a.createElement("section",null,o.a.createElement("ul",{className:"cards"},i.map((function(e){return o.a.createElement(x,{key:e._id,card:e,onCardClick:r,onCardLike:c,onCardDelete:u})})))))};var P=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa92020 Mesto Russia"))};var U=function(e){var t=e.title,a=e.name,n=e.submitText,r=e.isOpen,i=e.onClose,c=e.onSubmit,u=e.children,s="popup popup_type_".concat(a," ").concat(r&&"popup_opened");return o.a.createElement("div",{className:s},o.a.createElement("form",{name:a,onSubmit:c,className:"popup__container popup__container_type_input",noValidate:!0},o.a.createElement("p",{className:"popup__text"},t),u,o.a.createElement("button",{type:"submit",className:"button popup__save-button"},n),o.a.createElement("button",{type:"reset",className:"button popup__close-button popup__close-button_type_input",onClick:i},o.a.createElement("img",{src:f,alt:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"}))))};var B=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,r=o.a.useContext(w),i=o.a.useState(""),c=Object(u.a)(i,2),s=c[0],l=c[1],p=o.a.useState(""),m=Object(u.a)(p,2),_=m[0],f=m[1],d=o.a.useState("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),h=Object(u.a)(d,2),b=h[0],E=h[1],v=o.a.useRef();return o.a.useEffect((function(){var e=document.forms.edit;v.current=new y(C,e),v.current.enableValidation()}),[]),o.a.useEffect((function(){l(r.name),f(r.about),E("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")}),[r]),o.a.useEffect((function(){E("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")}),[t]),o.a.createElement(U,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",submitText:b,onClose:function(){l(r.name),f(r.about),v.current.clearErrors(),a()},onSubmit:function(e){E("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),e.preventDefault(),n({name:s,about:_})},isOpen:t},o.a.createElement("input",{name:"name",className:"popup__input popup__input_type_name",type:"text",required:!0,minLength:"2",maxLength:"40",autoComplete:"off",value:s,onChange:function(e){l(e.target.value)}}),o.a.createElement("span",{className:"popup__error popup__error_type_name"}),o.a.createElement("input",{name:"occupation",className:"popup__input popup__input_type_occupation",type:"text",required:!0,minLength:"2",maxLength:"200",autoComplete:"off",value:_,onChange:function(e){f(e.target.value)}}),o.a.createElement("span",{className:"popup__error popup__error_type_occupation"}))};var R=function(e){var t=e.card,a=e.onClose,n="popup popup_type_image ".concat(0!==Object.keys(t).length&&"popup_opened");return o.a.createElement("div",{className:n},o.a.createElement("div",{className:"popup__container popup__container_type_picture"},o.a.createElement("button",{className:"button popup__close-button popup__close-button_type_picture",type:"reset",onClick:a},o.a.createElement("img",{src:f,alt:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"})),o.a.createElement("img",{src:t.link,alt:"",className:"popup__image"}),o.a.createElement("p",{className:"popup__subtitle"},t.name)))},D=new(function(){function e(t){var a=t.userURL,n=t.cardsURL,o=t.token;Object(v.a)(this,e),this._userURL=a,this._cardsURL=n,this._token=o}return Object(g.a)(e,[{key:"userDownload",value:function(){return fetch(this._userURL,{method:"GET",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ".concat(e.status))}))}},{key:"cardsDownload",value:function(){return fetch(this._cardsURL,{method:"GET",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c ".concat(e.status))}))}},{key:"profileDataUpload",value:function(e,t){return fetch(this._userURL,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 ".concat(e.status))}))}},{key:"newCardUpload",value:function(e,t){return fetch(this._cardsURL,{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 ".concat(e.status))}))}},{key:"deleteCard",value:function(e){var t=this._cardsURL+"/".concat(e);return fetch(t,{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438")}))}},{key:"changeLikeCardStatus",value:function(e,t){var a=this._cardsURL+"/likes/".concat(e);return t?fetch(a,{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c")})):fetch(a,{method:"PUT",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c")}))}},{key:"avatarUpload",value:function(e){return fetch(this._userURL+"/avatar",{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430")}))}}]),e}())({userURL:"https://mesto.nomoreparties.co/v1/cohort-15/users/me",cardsURL:"https://mesto.nomoreparties.co/v1/cohort-15/cards",token:"e6bf7ea4-0157-47ee-b8f8-bf17d3b13ba1"});var I=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,r=o.a.useRef(),i=o.a.useRef(),c=o.a.useState("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),s=Object(u.a)(c,2),l=s[0],p=s[1];return o.a.useEffect((function(){p("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")}),[t,p]),o.a.useEffect((function(){var e=document.forms.avatar;i.current=new y(C,e),i.current.enableValidation()}),[]),o.a.createElement(U,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",submitText:l,onClose:function(){r.current="",i.current.clearErrors(),a()},onSubmit:function(e){p("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),e.preventDefault(),n(r.current.value)},isOpen:t},o.a.createElement("input",{ref:r,name:"link",className:"popup__input popup__input_type_link",type:"url",required:!0,placeholder:"\u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",autoComplete:"off"}),o.a.createElement("span",{className:"popup__error popup__error_type_link"}))};var A=function(e){var t=e.isOpen,a=e.submitButtonText,n=e.onClose,r=e.onAddPlace,i=o.a.useState(""),c=Object(u.a)(i,2),s=c[0],l=c[1],p=o.a.useState(""),m=Object(u.a)(p,2),_=m[0],f=m[1],d=o.a.useRef();return o.a.useEffect((function(){l(""),f("")}),[t,l,f]),o.a.useEffect((function(){var e=document.querySelector('form[name="new-card"]');d.current=new y(C,e),d.current.enableValidation()}),[]),o.a.createElement(U,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"new-card",submitText:a,isOpen:t,onClose:function(){d.current.clearErrors(),n()},onSubmit:function(e){e.preventDefault(),r(s,_)}},o.a.createElement("input",{value:s,onChange:function(e){l(e.target.value)},name:"place",className:"popup__input popup__input_type_place",type:"text",placeholder:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30",autoComplete:"off"}),o.a.createElement("span",{className:"popup__error popup__error_type_place"}),o.a.createElement("input",{value:_,onChange:function(e){f(e.target.value)},name:"link",className:"popup__input popup__input_type_link",type:"url",required:!0,placeholder:"\u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",autoComplete:"off"}),o.a.createElement("span",{className:"popup__error popup__error_type_link"}))};var q=function(e){var t=e.isOpen,a=e.onClose,n=e.onConfirm,r=o.a.useState("\u0414\u0430"),i=Object(u.a)(r,2),c=i[0],s=i[1];return o.a.useEffect((function(){s("\u0414\u0430")}),[t,s]),o.a.createElement(U,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"confirm",submitText:c,isOpen:t,onClose:a,onSubmit:function(e){s("\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435..."),e.preventDefault(),n()}})};var V=function(e){var t=e.message,a="popup popup_type_error ".concat(0!==t.length&&"popup_opened");return o.a.createElement("div",{className:a},o.a.createElement("p",{className:"popup__message"},t))};var z=function(){var e=Object(s.g)(),t=o.a.useState(!1),a=Object(u.a)(t,2),n=a[0],r=a[1],i=o.a.useState(!1),l=Object(u.a)(i,2),m=l[0],_=l[1],f=o.a.useState("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),d=Object(u.a)(f,2),h=d[0],b=d[1],v=o.a.useState(!1),g=Object(u.a)(v,2),y=g[0],C=g[1],k=o.a.useState(!1),S=Object(u.a)(k,2),O=S[0],x=S[1],U=o.a.useState({}),z=Object(u.a)(U,2),J=z[0],G=z[1],M=o.a.useState({}),H=Object(u.a)(M,2),W=H[0],$=H[1],F=o.a.useState(""),K=Object(u.a)(F,2),Q=K[0],X=K[1],Y=o.a.useState({name:"",about:"",avatar:""}),Z=Object(u.a)(Y,2),ee=Z[0],te=Z[1],ae=o.a.useState([]),ne=Object(u.a)(ae,2),oe=ne[0],re=ne[1],ie=o.a.useState(!1),ce=Object(u.a)(ie,2),ue=ce[0],se=ce[1],le=o.a.useState(""),pe=Object(u.a)(le,2),me=pe[0],_e=pe[1];function fe(){r(!1),_(!1),C(!1),x(!1),G({}),$({})}function de(e){se(!0),_e(e)}return o.a.useEffect((function(){var e=[D.userDownload(),D.cardsDownload()];Promise.all(e).then((function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];te(a),re(n)})).catch((function(e){X("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"),setTimeout((function(){X("")}),2e3)}))}),[]),o.a.useEffect((function(){(function(){var e=localStorage.getItem("jwt");return e?fetch("".concat(E,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430  ".concat(e.status))})):Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ")})().then((function(t){de(t.data.email),e.push("/")})).catch((function(t){e.push("/sign-in")}))}),[]),o.a.createElement(w.Provider,{value:ee},o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"body"},o.a.createElement(s.d,null,o.a.createElement(s.b,{exact:!0,path:"/"},o.a.createElement(L,{email:me,onLogout:function(){se(!1),localStorage.removeItem("jwt")}})),o.a.createElement(s.b,{path:"/:page"},o.a.createElement(L,null))),o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/sign-up"},o.a.createElement(N,null)),o.a.createElement(s.b,{path:"/sign-in"},o.a.createElement(j,{handleLogin:de})),o.a.createElement(p,{path:"/",onEditProfile:function(){r(!0)},onAddPlace:function(){_(!0)},onEditAvatar:function(){C(!0)},onCardClick:function(e){G(e)},cards:oe,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===ee._id}));D.changeLikeCardStatus(e._id,t).then((function(t){var a=oe.map((function(a){return a._id===e._id?t:a}));re(a)})).catch((function(e){X("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c"),setTimeout((function(){X("")}),2e3)}))},onCardDelete:function(e){x(!0),$(e)},loggedIn:ue,component:T})),o.a.createElement(P,null),o.a.createElement(B,{isOpen:n,onClose:fe,onUpdateUser:function(e){var t=e.name,a=e.about;D.profileDataUpload(t,a).then((function(e){te(e),fe()})).catch((function(e){X("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435"),r(!1),r(!0),setTimeout((function(){X("")}),2e3)}))}}),o.a.createElement(A,{isOpen:m,submitButtonText:h,onClose:fe,onAddPlace:function(e,t){b("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),D.newCardUpload(e,t).then((function(e){re([e].concat(Object(c.a)(oe))),fe()})).catch((function(e){X("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c"),setTimeout((function(){X("")}),2e3)})).finally((function(){b("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")}))}}),o.a.createElement(I,{isOpen:y,onClose:fe,onUpdateAvatar:function(e){D.avatarUpload({link:e}).then((function(e){te(e),fe()})).catch((function(e){X("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f"),C(!1),C(!0),setTimeout((function(){X("")}),2e3)}))}}),o.a.createElement(q,{isOpen:O,onClose:fe,onConfirm:function(){W.owner._id===ee._id&&D.deleteCard(W._id).then((function(){var e=oe.filter((function(e){return e._id!==W._id}));re(e),fe()})).catch((function(e){X("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"),x(!1),x(!0),setTimeout((function(){X("")}),2e3)}))}}),o.a.createElement(R,{card:J,onClose:fe}),o.a.createElement(V,{message:Q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S.a,null,o.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.4df4885c.chunk.js.map