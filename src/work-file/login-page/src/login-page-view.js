import { createDiv, creatureText, creatureInput } from './constructors/constructors';

class ViewLogin {

    constructor() {
        this._rootLog = document.getElementById('root-login');
    }


    initLogin = () => {
        const logInUser = [
            {class: "login-container"}
        ];

        const logInContent = [
            {class: "login-container__header"},
            {class: "login-container__error"},
            {class: "login-container__input"},
            {class: "login-container__send", id: "user-btn-send"}
        ];

        const LogInHeader = [
            {class: "header-logo"},
            {class: "header-name"}
        ];

        const UserErrorEl = [
            {class: "error__logo"},
            {class: "error__text"}
        ];

        const userInputLog = [
            {class: "users-input",  id: "usersInput"}
        ];



        const userLogIn = createDiv(logInUser);
        const ContentlogIn = createDiv(logInContent);
        const headerLogIn = createDiv(LogInHeader);
        const errorElUser = createDiv(UserErrorEl);
        const inputLogUser = creatureInput(userInputLog);

        this._rootLog.append(...userLogIn);
        userLogIn[0].append(...ContentlogIn);
        ContentlogIn[0].append(...headerLogIn);
        ContentlogIn[1].append(...errorElUser);
        ContentlogIn[2].append(...inputLogUser);




        headerLogIn[1].innerText = 'pupsiki 2020';
        errorElUser[1].innerText = 'Ошибка авторизации! Обратитесь к администратору';
        ContentlogIn[3].innerText = 'Войти';
    };



}

export default ViewLogin
