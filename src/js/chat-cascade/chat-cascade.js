///////////////     CHAT     ////////////////
export const divRoot = [
    {class: 'chat'},
    {class: 'window-logIn-user'},
    {class: 'window-logIn-admin'}
];

export const divChat = [
    {class: 'header'},
    {class: 'body'}
];

export const divChatHeader = [
    {class: 'header__logo'},
    {class: 'header__name'},
    {class: 'header__adm-btn', id: 'adm-btn'},
    {class: 'header__users', id: 'qualityUsers'}
];

export const divChatBody = [
    {class: 'body__chat'},
    {class: 'body__users', id: 'bodyUsers'}
];

export const divChatMes = [
    {class: 'message-body', id: 'allMessage'},
    {class: 'smile'},
    {class: 'message-inp'}
];

export const divInpMes = [
    {class: 'message-inp__text'},
    {class: 'message-inp__smile'},
    {class: 'message-inp__send', id: 'send'}
];

export const inpTextMes = [
    {
        class: 'text-input',
        id: 'messageText',
        maxlength: '1000',
        required: true,
        placeholder: 'Введите сообщение'
    }
];