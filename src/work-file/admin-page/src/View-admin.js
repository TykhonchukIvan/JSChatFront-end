import { createDiv, creatureText, creatureInput } from './constructors/constructors';

class ViewAdmin {

    constructor() {
        this._rootAdmin = document.getElementById('root-admin');
    }

    initAdmin = () => {

        const adminContainer = [
            {class: "admin-container"}
        ];

        const adminContent = [
            {class: "admin-container__header"},
            {class: "admin-container__body"},
        ];

        const adminHeader = [
            {class: "header-logo"},
            {class: "header-name"},
            {class: "header-btn"}
        ];

        const registrationBody = [
            {class: "body-registration"},
            {class: "body-user-online"}
        ];

        const registrationForm = [
            {class: "body-registration__fromName"},
            {class: "body-registration__fromIp"},
            {class: "body-registration__btn"}
        ];

        const registrationFormIp = [
            {class: "reg-name"}
        ];

        const registrationFormName = [
            {class: "reg-ip"}
        ];

        const registrationFormIpText = [
            {class: "reg-name-text"}
        ];

        const registrationFormNameText = [
            {class: "reg-ip-text"}
        ];


        const containerAdmin = createDiv(adminContainer);
        const contentAdmin = createDiv(adminContent);
        const headerAdmin = createDiv(adminHeader);
        const bodyRegistration = createDiv(registrationBody);
        const formRegistration =  createDiv(registrationForm);
        const ipRegistrationForm = creatureInput(registrationFormIp);
        const nameRegistrationForm = creatureInput(registrationFormName);

        const textIpRegistrationForm = createDiv(registrationFormIpText);
        const textNameRegistrationForm = createDiv(registrationFormNameText);



        this._rootAdmin.append(...containerAdmin);
        containerAdmin[0].append(...contentAdmin);
        contentAdmin[0].append(...headerAdmin);
        contentAdmin[1].append(...bodyRegistration);
        bodyRegistration[0].append(...formRegistration);

        formRegistration[0].append(...textIpRegistrationForm);
        formRegistration[1].append(...textNameRegistrationForm);

        formRegistration[0].append(...ipRegistrationForm);
        formRegistration[1].append(...nameRegistrationForm);




        headerAdmin[1].innerText = 'pupsiki 2020';
        headerAdmin[2].innerText = 'Чат';

        textIpRegistrationForm[0].innerText = 'Имя';
        textNameRegistrationForm[0].innerText = 'IP адрес';

        formRegistration[2].innerText = 'зарегистрировать';
    }
}

export default ViewAdmin