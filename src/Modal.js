class Modal {
    constructor() {
        this._online = [];
    }

    setOnline = person => this._online.push(person);

    getOnline = () => this._online;
}

export default Modal;