import { createDiv, creatureInput } from './constructors/constructors';
import { adminContainer, adminContent, adminHeader } from './admin-cascade/admin-cascade'
import { registrationBody, registrationForm, registrationFormIp, registrationFormName, registrationFormIpText, registrationFormNameText} from './admin-body/adm-body'

class View {

    constructor() {
        this._rootAdmin = document.getElementById('root-admin');
    }

    initAdmin = () => {

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

        headerAdmin[1].innerText = 'Star Chat';
        headerAdmin[2].innerText = 'Чат';
        textIpRegistrationForm[0].innerText = 'Имя';
        textNameRegistrationForm[0].innerText = 'IP адрес';
        formRegistration[2].innerText = 'зарегистрировать';
    }
}

export default View