(this.webpackJsonpmesto2=this.webpackJsonpmesto2||[]).push([[0],{30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),c=a.n(r),i=(a(30),a(1)),u=a(7),s=a(2),l=a(25),p=function(e){var t=e.component,a=Object(l.a)(e,["component"]);return console.log(a),console.log(t),o.a.createElement(s.b,null,a.loggedIn?o.a.createElement(t,a):o.a.createElement(s.a,{to:"/sign-in"}))},m=a(24),_=a.p+"static/media/logo.c2821b38.svg";var f=function(e){var t=e.children;return o.a.createElement("header",{className:"header"},o.a.createElement("img",{className:"logo",alt:"\u041c\u0435\u0441\u0442\u043e \u0432 \u0420\u043e\u0441\u0441\u0438\u0438",src:_}),t)},d=o.a.createContext();var h=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,r=e.onCardDelete,c=o.a.useContext(d),i=t.owner._id===c._id,u="button card__delete-button ".concat(i?"card__delete-button_visible":"card__delete-button_hidden"),s=t.likes.some((function(e){return e._id===c._id})),l="button card__like-button ".concat(s&&"card__like-button_pressed");return o.a.createElement("li",{className:"card"},o.a.createElement("img",{src:t.link,alt:"",className:"card__image",onClick:function(){a(t)}}),o.a.createElement("button",{className:u,type:"button",onClick:function(){r(t)}}),o.a.createElement("div",{className:"card__caption"},o.a.createElement("h2",{className:"card__title"},t.name),o.a.createElement("div",{className:"card__like-container"},o.a.createElement("button",{className:l,type:"button",onClick:function(){n(t)}}),o.a.createElement("p",{className:"card__like-counter"},t.likes.length))))};var E=function(e){var t=e.onEditProfile,a=e.onAddPlace,n=e.onEditAvatar,r=e.onCardClick,c=e.cards,i=e.onCardLike,u=e.onCardDelete,s=o.a.useContext(d);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("img",{src:s.avatar,alt:"\u0444\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__avatar",onClick:n}),o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__name"},s.name),o.a.createElement("button",{className:"button profile__edit-button",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:t}),o.a.createElement("p",{className:"profile__occupation"},s.about)),o.a.createElement("button",{className:"button profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onClick:a})),o.a.createElement("section",null,o.a.createElement("ul",{className:"cards"},c.map((function(e){return o.a.createElement(h,{key:e._id,card:e,onCardClick:r,onCardLike:i,onCardDelete:u})})))))};var b=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa92020 Mesto Russia"))},v=a.p+"static/media/close-icon.b9c42c3d.svg";var g=function(e){var t=e.title,a=e.name,n=e.submitText,r=e.isOpen,c=e.onClose,i=e.onSubmit,u=e.children,s="popup popup_type_".concat(a," ").concat(r&&"popup_opened");return o.a.createElement("div",{className:s},o.a.createElement("form",{name:a,onSubmit:i,className:"popup__container popup__container_type_input",noValidate:!0},o.a.createElement("p",{className:"popup__text"},t),u,o.a.createElement("button",{type:"submit",className:"button popup__save-button"},n),o.a.createElement("button",{type:"reset",className:"button popup__close-button popup__close-button_type_input",onClick:c},o.a.createElement("img",{src:v,alt:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"}))))},y=a(14),C=a(15),k=function(){function e(t,a){Object(y.a)(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=a}return Object(C.a)(e,[{key:"enableValidation",value:function(){this._getInputList(),this._getSubmitButtonElement(),this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"clearErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleSubmitButtonState(this._submitButton)}},{key:"_toggleSubmitButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_hasInvalidInput",value:function(){return!!this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hideInputError",value:function(e){var t=this._getErrorElement(e);e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_showInputError",value:function(e,t){var a=this._getErrorElement(e);e.classList.add(this._inputErrorClass),a.classList.add(this._errorClass),a.textContent=t}},{key:"_getInputList",value:function(){var e=Array.from(this._formElement.querySelectorAll(this._inputSelector));return this._inputList=e,this._inputList}},{key:"_getSubmitButtonElement",value:function(){var e=this._formElement.querySelector(this._submitButtonSelector);return this._buttonElement=e,this._buttonElement}},{key:"_getErrorElement",value:function(e){return this._formElement.querySelector(".popup__error_type_".concat(e.name))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleSubmitButtonState()})),t.addEventListener("focus",(function(){e._toggleSubmitButtonState()}))}))}}]),e}(),S={formSelector:".popup__container_type_input",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},j={formSelector:".auth-form",inputSelector:".auth-form__input",submitButtonSelector:".auth-form__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};var N=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,r=o.a.useContext(d),c=o.a.useState(""),u=Object(i.a)(c,2),s=u[0],l=u[1],p=o.a.useState(""),m=Object(i.a)(p,2),_=m[0],f=m[1],h=o.a.useState("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),E=Object(i.a)(h,2),b=E[0],v=E[1],y=o.a.useRef();return o.a.useEffect((function(){var e=document.forms.edit;y.current=new k(S,e),y.current.enableValidation()}),[]),o.a.useEffect((function(){l(r.name),f(r.about),v("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")}),[r]),o.a.useEffect((function(){v("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")}),[t]),console.log(r),o.a.createElement(g,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",submitText:b,onClose:function(){l(r.name),f(r.about),y.current.clearErrors(),a()},onSubmit:function(e){v("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),e.preventDefault(),n({name:s,about:_})},isOpen:t},o.a.createElement("input",{name:"name",className:"popup__input popup__input_type_name",type:"text",required:!0,minLength:"2",maxLength:"40",autoComplete:"off",value:s,onChange:function(e){l(e.target.value)}}),o.a.createElement("span",{className:"popup__error popup__error_type_name"}),o.a.createElement("input",{name:"occupation",className:"popup__input popup__input_type_occupation",type:"text",required:!0,minLength:"2",maxLength:"200",autoComplete:"off",value:_,onChange:function(e){f(e.target.value)}}),o.a.createElement("span",{className:"popup__error popup__error_type_occupation"}))};var O=function(e){var t=e.card,a=e.onClose,n="popup popup_type_image ".concat(0!==Object.keys(t).length&&"popup_opened");return o.a.createElement("div",{className:n},o.a.createElement("div",{className:"popup__container popup__container_type_picture"},o.a.createElement("button",{className:"button popup__close-button popup__close-button_type_picture",type:"reset",onClick:a},o.a.createElement("img",{src:v,alt:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"})),o.a.createElement("img",{src:t.link,alt:"",className:"popup__image"}),o.a.createElement("p",{className:"popup__subtitle"},t.name)))},L=new(function(){function e(t){var a=t.userURL,n=t.cardsURL,o=t.token;Object(y.a)(this,e),this._userURL=a,this._cardsURL=n,this._token=o}return Object(C.a)(e,[{key:"userDownload",value:function(){return fetch(this._userURL,{method:"GET",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ".concat(e.status))}))}},{key:"cardsDownload",value:function(){return fetch(this._cardsURL,{method:"GET",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c ".concat(e.status))}))}},{key:"profileDataUpload",value:function(e,t){return fetch(this._userURL,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 ".concat(e.status))}))}},{key:"newCardUpload",value:function(e,t){return fetch(this._cardsURL,{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 ".concat(e.status))}))}},{key:"deleteCard",value:function(e){var t=this._cardsURL+"/".concat(e);return fetch(t,{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438")}))}},{key:"changeLikeCardStatus",value:function(e,t){var a=this._cardsURL+"/likes/".concat(e);return t?fetch(a,{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c")})):fetch(a,{method:"PUT",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c")}))}},{key:"avatarUpload",value:function(e){return fetch(this._userURL+"/avatar",{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430")}))}}]),e}())({userURL:"https://mesto.nomoreparties.co/v1/cohort-15/users/me",cardsURL:"https://mesto.nomoreparties.co/v1/cohort-15/cards",token:"e6bf7ea4-0157-47ee-b8f8-bf17d3b13ba1"});var w=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,r=o.a.useRef(),c=o.a.useRef(),u=o.a.useState("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),s=Object(i.a)(u,2),l=s[0],p=s[1];return o.a.useEffect((function(){p("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")}),[t,p]),o.a.useEffect((function(){var e=document.forms.avatar;c.current=new k(S,e),c.current.enableValidation()}),[]),o.a.createElement(g,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",submitText:l,onClose:function(){r.current="",c.current.clearErrors(),a()},onSubmit:function(e){p("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),e.preventDefault(),n(r.current.value)},isOpen:t},o.a.createElement("input",{ref:r,name:"link",className:"popup__input popup__input_type_link",type:"url",required:!0,placeholder:"\u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",autoComplete:"off"}),o.a.createElement("span",{className:"popup__error popup__error_type_link"}))};var T=function(e){var t=e.isOpen,a=e.submitButtonText,n=e.onClose,r=e.onAddPlace,c=o.a.useState(""),u=Object(i.a)(c,2),s=u[0],l=u[1],p=o.a.useState(""),m=Object(i.a)(p,2),_=m[0],f=m[1],d=o.a.useRef();return o.a.useEffect((function(){l(""),f("")}),[t,l,f]),o.a.useEffect((function(){var e=document.querySelector('form[name="new-card"]');d.current=new k(S,e),d.current.enableValidation()}),[]),o.a.createElement(g,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"new-card",submitText:a,isOpen:t,onClose:function(){d.current.clearErrors(),n()},onSubmit:function(e){e.preventDefault(),r(s,_)}},o.a.createElement("input",{value:s,onChange:function(e){l(e.target.value)},name:"place",className:"popup__input popup__input_type_place",type:"text",placeholder:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30",autoComplete:"off"}),o.a.createElement("span",{className:"popup__error popup__error_type_place"}),o.a.createElement("input",{value:_,onChange:function(e){f(e.target.value)},name:"link",className:"popup__input popup__input_type_link",type:"url",required:!0,placeholder:"\u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",autoComplete:"off"}),o.a.createElement("span",{className:"popup__error popup__error_type_link"}))};var x=function(e){var t=e.isOpen,a=e.onClose,n=e.onConfirm,r=o.a.useState("\u0414\u0430"),c=Object(i.a)(r,2),u=c[0],s=c[1];return o.a.useEffect((function(){s("\u0414\u0430")}),[t,s]),o.a.createElement(g,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"confirm",submitText:u,isOpen:t,onClose:a,onSubmit:function(e){s("\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435..."),e.preventDefault(),n()}})};var P=function(e){var t=e.message,a="popup popup_type_error ".concat(0!==t.length&&"popup_opened");return o.a.createElement("div",{className:a},o.a.createElement("p",{className:"popup__message"},t))};var U=function(e){var t=e.email,a=e.onLogout,n=o.a.useState(!1),r=Object(i.a)(n,2),c=r[0],u=r[1],l=o.a.useState(!1),p=Object(i.a)(l,2),_=p[0],h=p[1],v=o.a.useState("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),g=Object(i.a)(v,2),y=g[0],C=g[1],k=o.a.useState(!1),S=Object(i.a)(k,2),j=S[0],U=S[1],B=o.a.useState(!1),R=Object(i.a)(B,2),D=R[0],I=R[1],A=o.a.useState({}),q=Object(i.a)(A,2),V=q[0],z=q[1],J=o.a.useState({}),G=Object(i.a)(J,2),M=G[0],H=G[1],W=o.a.useState(""),$=Object(i.a)(W,2),F=$[0],K=$[1],Q=o.a.useState({name:"",about:"",avatar:""}),X=Object(i.a)(Q,2),Y=X[0],Z=X[1],ee=o.a.useState([]),te=Object(i.a)(ee,2),ae=te[0],ne=te[1];function oe(){u(!1),h(!1),U(!1),I(!1),z({}),H({})}return o.a.useEffect((function(){var e=[L.userDownload(),L.cardsDownload()];Promise.all(e).then((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];Z(a),ne(n)})).catch((function(e){K("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"),setTimeout((function(){K("")}),2e3)}))}),[]),o.a.createElement(s.b,{path:"/home"},o.a.createElement(d.Provider,{value:Y},o.a.createElement(f,null,o.a.createElement("div",{className:"header__info-box"},o.a.createElement("p",{className:"header__link"},t," "),o.a.createElement("button",{className:"header__link header__link_theme_grey",onClick:a},"\u0412\u044b\u0439\u0442\u0438 "))),o.a.createElement(E,{onEditProfile:function(){u(!0)},onAddPlace:function(){h(!0)},onEditAvatar:function(){U(!0)},onCardClick:function(e){z(e)},cards:ae,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===Y._id}));L.changeLikeCardStatus(e._id,t).then((function(t){var a=ae.map((function(a){return a._id===e._id?t:a}));ne(a)})).catch((function(e){K("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c"),setTimeout((function(){K("")}),2e3)}))},onCardDelete:function(e){I(!0),H(e)}}),o.a.createElement(b,null),o.a.createElement(N,{isOpen:c,onClose:oe,onUpdateUser:function(e){var t=e.name,a=e.about;L.profileDataUpload(t,a).then((function(e){Z(e),oe()})).catch((function(e){K("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435"),u(!1),u(!0),setTimeout((function(){K("")}),2e3)}))}}),o.a.createElement(T,{isOpen:_,submitButtonText:y,onClose:oe,onAddPlace:function(e,t){C("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),L.newCardUpload(e,t).then((function(e){ne([e].concat(Object(m.a)(ae))),oe()})).catch((function(e){K("\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c"),setTimeout((function(){K("")}),2e3)})).finally((function(){C("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")}))}}),o.a.createElement(w,{isOpen:j,onClose:oe,onUpdateAvatar:function(e){L.avatarUpload({link:e}).then((function(e){Z(e),oe()})).catch((function(e){K("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f"),U(!1),U(!0),setTimeout((function(){K("")}),2e3)}))}}),o.a.createElement(x,{isOpen:D,onClose:oe,onConfirm:function(){M.owner._id===Y._id&&L.deleteCard(M._id).then((function(){var e=ae.filter((function(e){return e._id!==M._id}));ne(e),oe()})).catch((function(e){K("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"),I(!1),I(!0),setTimeout((function(){K("")}),2e3)}))}}),o.a.createElement(O,{card:V,onClose:oe}),o.a.createElement(P,{message:F})))},B=a(10),R=a(8),D=a.p+"static/media/yes.1b6082f8.svg",I=a.p+"static/media/no.df8eddf6.svg";var A=function(e){var t=e.isSuccess,a=e.isOpen,n=e.onClose,r="popup popup_type_input ".concat(a&&"popup_opened");return o.a.createElement("div",{className:r},o.a.createElement("div",{className:"popup__container popup__container_type_input popup__container_type_info"},o.a.createElement("img",{src:t?D:I,alt:"\u0443\u0441\u043f\u0435\u0448\u043d\u043e"}),o.a.createElement("p",{className:"popup__text",style:{textAlign:"center"}},t?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."),o.a.createElement("button",{type:"reset",className:"button popup__close-button popup__close-button_type_input",onClick:n},o.a.createElement("img",{src:v,alt:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"}))))},q="https://auth.nomoreparties.co";var V=function(e){var t=e.handleLogin,a=o.a.useState({email:"",password:""}),n=Object(i.a)(a,2),r=n[0],c=n[1],l=Object(s.g)(),p=o.a.useState(!1),m=Object(i.a)(p,2),_=m[0],d=m[1],h=o.a.useState(!1),E=Object(i.a)(h,2),b=E[0],v=E[1],g=o.a.useRef();function y(e){var t=e.target,a=t.name,n=t.value;c(Object(R.a)(Object(R.a)({},r),{},Object(B.a)({},a,n))),console.log(r)}return o.a.useEffect((function(){var e=document.forms.login;g.current=new k(j,e),g.current.enableValidation()}),[]),o.a.useEffect((function(){(function(){var e=localStorage.getItem("jwt");return e?fetch("".concat(q,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430  ".concat(e.status))})):Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ")})().then((function(e){t(e.data.email),l.push("/home")})).catch((function(e){l.push("/sign-in")}))}),[]),o.a.createElement("div",null,o.a.createElement(f,null,o.a.createElement(u.b,{to:"/sign-up",className:"header__link"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")),o.a.createElement("form",{name:"login",onSubmit:function(e){e.preventDefault(),function(e){var t=e.email,a=e.password;return fetch("".concat(q,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:a,email:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430  ".concat(e.status))}))}(r).then((function(e){e.token&&(console.log(e),localStorage.setItem("jwt",e.token),c(Object(R.a)(Object(R.a)({},r),{},{password:""})),t(r.email),console.log("submitting"),l.push("/home"))})).catch((function(e){v(!1),d(!0),console.log(e)}))},className:"auth-form",noValidate:!0},o.a.createElement("p",{className:"auth-form__text"},"\u0412\u0445\u043e\u0434"),o.a.createElement("input",{name:"email",className:"auth-form__input",type:"email",required:!0,pattern:"^[\\w\\-\\.]+@[\\w\\-\\.]+",minLength:"3",maxLength:"40",autoComplete:"off",value:r.name,onChange:y,placeholder:"Email"}),o.a.createElement("span",{className:"popup__error popup__error_type_email"}),o.a.createElement("input",{name:"password",className:"auth-form__input",type:"password",required:!0,pattern:"^[\\w\\-\\.#$%&*]+",minLength:"3",maxLength:"25",autoComplete:"off",value:r.password,onChange:y,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),o.a.createElement("span",{className:"popup__error popup__error_type_password"}),o.a.createElement("button",{type:"submit",className:"button auth-form__save-button"},"\u0412\u043e\u0439\u0442\u0438")),o.a.createElement(A,{isOpen:_,isSuccess:b,onClose:function(){d(!1),b&&l.push("/sign-in")}}))};var z=function(){var e=Object(s.g)({}),t=o.a.useState({email:"",password:""}),a=Object(i.a)(t,2),n=a[0],r=a[1],c=o.a.useState(!1),l=Object(i.a)(c,2),p=l[0],m=l[1],_=o.a.useState(!1),d=Object(i.a)(_,2),h=d[0],E=d[1],b=o.a.useRef();function v(e){var t=e.target,a=t.name,o=t.value;r(Object(R.a)(Object(R.a)({},n),{},Object(B.a)({},a,o)))}return o.a.useEffect((function(){var e=document.forms.login;b.current=new k(j,e),b.current.enableValidation()}),[]),o.a.createElement("div",null,o.a.createElement(f,null,o.a.createElement(u.b,{to:"/sign-in",className:"header__link"},"\u0412\u043e\u0439\u0442\u0438")),o.a.createElement("form",{name:"login",onSubmit:function(e){e.preventDefault(),function(e){var t=e.email,a=e.password;return fetch("".concat(q,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:a,email:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430  ".concat(e.status))}))}(n).then((function(e){E(!0),m(!0)})).catch((function(e){E(!1),m(!0)}))},className:"auth-form",noValidate:!0},o.a.createElement("p",{className:"auth-form__text"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),o.a.createElement("input",{name:"email",className:"auth-form__input",type:"email",required:!0,minLength:"2",maxLength:"40",autoComplete:"off",value:n.name,onChange:v,placeholder:"Email"}),o.a.createElement("span",{className:"popup__error popup__error_type_email"}),o.a.createElement("input",{name:"password",className:"auth-form__input",type:"password",required:!0,minLength:"2",maxLength:"200",autoComplete:"off",value:n.password,onChange:v,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),o.a.createElement("span",{className:"popup__error popup__error_type_password"}),o.a.createElement("button",{type:"submit",className:"button auth-form__save-button"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),o.a.createElement(u.b,{to:"/login",className:"auth-form__link"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438.")),o.a.createElement(A,{isOpen:p,isSuccess:h,onClose:function(){m(!1),h&&e.push("/sign-in")}}))};var J=function(){var e=o.a.useState(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],r=o.a.useState(""),c=Object(i.a)(r,2),l=c[0],m=c[1];return o.a.createElement(u.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"body"},o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/sign-up"},o.a.createElement(z,null)),o.a.createElement(s.b,{path:"/sign-in"},o.a.createElement(V,{handleLogin:function(e){n(!0),m(e)}})),o.a.createElement(p,{path:"/home",loggedIn:a,email:l,onLogout:function(){n(!1),localStorage.removeItem("jwt")},component:U}),o.a.createElement(s.b,null,a?o.a.createElement(s.a,{to:"/home"}):o.a.createElement(s.a,{to:"/sign-in"}),";")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.cf908b84.chunk.js.map