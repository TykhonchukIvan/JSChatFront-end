export const drawMessage = message => {
    const body = document.getElementById('allMessage');
    const messageBox = document.createElement('div');
    const messageBoxOne = document.createElement('div');
    let UsersVal = document.getElementById('usersInput');
    let UserName = UsersVal.value;
    let scrollinDiv = document.getElementById('allMessage');

    if(message.ip === IP && message.name === UserName) {
        scrollinDiv.scrollTop = scrollinDiv.scrollHeight;
        messageBox.classList.add('message-body__user-message');
    } else {
        scrollinDiv.scrollTop = scrollinDiv.scrollHeight;
        messageBoxOne.classList.add('message-body__all-message');
    }

    const messageText = document.createElement('div');
    const messageTextOne = document.createElement('div');

    if(message.ip === IP && message.name === UserName) {
        messageText.classList.add('body-messageUser');
        messageText.innerText = message.text;
    } else {
        messageTextOne.classList.add('body-messageAll');
        messageTextOne.innerText = message.text;
    }

    const timeBox = document.createElement('div');
    const timeBoxOne = document.createElement('div');

    if(message.ip === IP && message.name === UserName) {
        timeBox.classList.add('name-data-messageUser');
    } else {
        timeBoxOne.classList.add('name-data-messageAll');
    }
    const date = document.createElement('div');
    const dateOne = document.createElement('div');

    if(message.ip === IP && message.name === UserName) {
        date.classList.add('message-dataUser');
        date.innerText = getTime();
    } else {
        dateOne.classList.add('message-dataAll');
        dateOne.innerText = getTime();
    }

    const nameUsersAdd = document.createElement('div');
    const nameUsersAddOne = document.createElement('div');

    if(message.ip === IP && message.name === UserName) {
        nameUsersAdd.classList.add('user-nameUser');
        nameUsersAdd.innerText = `:${UserName}`;
    } else {
        nameUsersAddOne.classList.add('user-nameAll');
        nameUsersAddOne.innerText = `${message.name}:`;
    }

    body.append(messageBox);
    body.append(messageBoxOne);

    messageBox.append(messageText);
    messageBoxOne.append(timeBoxOne);

    messageBox.append(timeBox);
    messageBoxOne.append(messageTextOne);

    timeBox.append(nameUsersAdd);
    timeBoxOne.append(dateOne);

    timeBox.append(date);
    timeBoxOne.append(nameUsersAddOne);
};

const clearAllMessage = () => {
    let temp = document.querySelectorAll('[class="message-body__user-message"]');
        
    for(let i = 0; i < temp.length; i++) {
        temp[i].remove();
    }
};

export const getMessageOnClick = cb => {
    const send = document.getElementById('send');

    send.onclick = () => {
        let text = document.getElementById('messageText').value;

        if ( text.length > 1000 || text.length < 1 ) {

            return;
        } else {            
            cb(text);
        }

        clearText();
    };
};

const clearText = () => document.getElementById('messageText').value = '';

const getTime = () => {
    const time = new Date();

    let hours = time.getHours().toString();
    let minutes = time.getMinutes().toString();

    let times = `${hours}:${minutes}`;

    return times;
};

export const enterSend = cb => {
    let input = document.getElementById('messageText');

    input.onkeypress = e => {
        if(e.keyCode === 13 && !e.shiftKey) {
            let text = document.getElementById('messageText').value;
            
            text.length > 1000 || text.length < 1 || text.trim() == '' ? false : cb(text) & clearText();
        }
        if( !e.shiftKey && e.keyCode === 13 ) {
            e.preventDefault();
        }
    };
};