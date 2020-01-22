///////////////     Modal window admin     ////////////////
export const modalAdminWrap = [
    {class: "modal-admin"}
];

export const modalAdminContent = [
    {class: "modal-admin-header"},
    {class: "modal-admin-error"},
    {class: "modal-admin-inpP"},
    {class: "modal-admin-inpP"},
    {class: "modal-admin-send", id: "adm-btn-send"}
];

export const modalAdminHeaderEl = [
    {class: "modal-admin-header__logo"},
    {class: "modal-admin-header__name"},
    {class: "modal-admin-header__close", id:"modalAdminClose" }
];

export const modalAdminErrorEl = [
    {class: "modal-admin-error__logo"},
    {class: "modal-admin-error__text"}
];

export const modalAdminInputL = [
    {
        class: "modal-admin-input",
        id: "adminInputLog",
        placeholder: "Введите имя",}
];

export const modalAdminInputP = [
    {
        class: "modal-admin-input",
        id: "adminInputPas",
        placeholder: "Введите пароль",
        type: "password"
    }
];