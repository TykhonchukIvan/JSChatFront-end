import { createDiv, creatureText, creatureInput } from './js/constructors/constructors';
import { divRoot, divChat, divChatHeader, divChatBody, divChatMes, divInpMes, inpTextMes } from './js/chat-cascade/chat-cascade';
import { modalUserWrap, modalUserContent, modalUserHeaderEl, modalUserErrorEl, modalUsrInput } from './js/modal-window-user/modal-window-user';
import { modalAdminWrap, modalAdminContent, modalAdminHeaderEl, modalAdminErrorEl, modalAdminInputL, modalAdminInputP } from './js/modal-window-admin/modal-window-admin';
import { message, messageAll, dataMessageAll, messageUser, dataMessageUser } from './js/message/message';
import { wrapperCloseSmile, smile } from './js/messange-smile/messange-smile';
import { usersOnline, usersIconText, usersTextOnline } from './js/users-oline/users-online';

class View {
    constructor() {
        this._root = document.getElementById('root');
        this._ip = IP;
    }

    init = () => {
        ///////////////     Modal window admin     ////////////////
        const modalAdmin = createDiv(modalAdminWrap);
        const adminContentModal = createDiv(modalAdminContent);
        const elModalAdminHeader = createDiv(modalAdminHeaderEl);
        const elModalAdminError = createDiv(modalAdminErrorEl);
        const adminInputLModal = creatureInput(modalAdminInputL);
        const adminInputPModal = creatureInput(modalAdminInputP);

        ///////////////     Modal window user    ////////////////
        const modalUsers = createDiv(modalUserWrap);
        const userContentModal = createDiv(modalUserContent);
        const elModalUserHeader = createDiv(modalUserHeaderEl);
        const elModalUserError = createDiv(modalUserErrorEl);
        const inputUsrModal = creatureInput(modalUsrInput);

        ///////////////     message     ////////////////
        const messageAllUser = createDiv(message);
        const allMessage = createDiv(messageAll);
        const allDataMessage = createDiv(dataMessageAll);
        const userMessage = createDiv(messageUser);
        const userDataMessage = createDiv(dataMessageUser);

        ///////////////     Chat     ////////////////
        const headerDiv = createDiv(divChatHeader);
        const bodyDiv = createDiv(divChatBody);
        const chatMes = createDiv(divChatMes);
        const inpMes = createDiv(divInpMes);
        const wrapper = createDiv(divRoot);
        const chatDiv = createDiv(divChat);
        const mesInp = creatureText(inpTextMes);

        ////////////////messange-smile///////////////////
        const closeSmile = createDiv(wrapperCloseSmile);
        const Smile = createDiv(smile);

        ////////////////online-users///////////////////
        const onlineUser = createDiv(usersOnline);
        const iconTextUser = createDiv(usersIconText);
        const textUsersOnline = createDiv(usersTextOnline);

        ////////////////online-users///////////////////
        bodyDiv[1].append(onlineUser[0]);
        // onlineUser[1].append(...iconTextUser);
        // iconTextUser[1].append(...textUsersOnline);

        ///////////////     Modal admin      ////////////////
        modalAdmin[0].append(...adminContentModal);
        adminContentModal[0].append(...elModalAdminHeader);
        adminContentModal[1].append(...elModalAdminError);
        adminContentModal[2].append(...adminInputLModal);
        adminContentModal[3].append(...adminInputPModal);

        ///////////////     Modal user      ////////////////
        modalUsers[0].append(...userContentModal);
        userContentModal[2].append(...inputUsrModal);
        inpMes[0].append(...mesInp);
        userContentModal[0].append(...elModalUserHeader);
        userContentModal[1].append(...elModalUserError);

        ///////////////     Chat     ////////////////
        chatMes[2].append(...inpMes);
        chatMes[1].append(...closeSmile); //
        closeSmile[0].append(...Smile); //

        console.log(chatMes);
        console.log(closeSmile);


        bodyDiv[0].append(...chatMes);
        chatDiv[1].append(...bodyDiv);
        chatDiv[0].append(...headerDiv);
        wrapper[0].append(...chatDiv);
        wrapper[1].append(...modalUsers);
        wrapper[2].append(...modalAdmin);
        this._root.append(...wrapper);

        headerDiv[1].innerText = 'Star Chat';
        headerDiv[2].innerText = 'админ';
        headerDiv[3].innerText = '14';
        elModalUserHeader[1].innerText = 'Star Chat';
        elModalUserError[1].innerText = 'Ошибка авторизации! Обратитесь к администратору';
        userContentModal[3].innerText = 'Войти';
        elModalAdminHeader[1].innerText = 'Star Chat';
        elModalAdminError[1].innerText = 'Неверно! попробуйте снова';
        adminContentModal[4].innerText = 'Войти';

        allDataMessage[0].innerText = 'дата';
        allDataMessage[1].innerText = 'имя:';
        allMessage[1].innerText = 'Текст Сообщени';

        userDataMessage[0].innerText = ':имя';
        userDataMessage[1].innerText = 'дата';
        userMessage[0].innerText = 'Текст Сообщени';

        Smile[0].innerText = '😀';
        Smile[1].innerText = '👍';
        Smile[2].innerText = '🙁';
        Smile[3].innerText = '😱';
        Smile[4].innerText = '😈';
        Smile[5].innerText = '🤪';
        Smile[6].innerText = '😴';
        Smile[7].innerText = '🥵';
        Smile[8].innerText = '🥶';
        Smile[9].innerText = '🤓';
        Smile[10].innerText = '🤖';
        Smile[11].innerText = '👽';
        Smile[12].innerText = '🤡';
        Smile[13].innerText = '😅';


        onlineUser[0].innerText = 'пользователи онлайн:';
        textUsersOnline[0].innerText = 'name';
        textUsersOnline[1].innerText = this._ip;
        iconTextUser[0].innerText = 'N';
    };
}

export default View;