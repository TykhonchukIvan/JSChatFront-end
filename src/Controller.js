import WebSocket from './WSocket';
import { drawMessage, getMessageOnClick, enterSend } from './js/draw-message/draw-message';
// import { drawUsersOnline } from './js/draw-users-online/draw-users-online';

class Controller {

    constructor(view) {
        this._view = view;
        this._ws = new WebSocket();
        this.init();
    }

    init = () => {
        this._ws.setOnMessage(drawMessage);
        this._view.init();
        getMessageOnClick(this.sendMessage.bind(this));
        enterSend(this.sendMessage.bind(this));
    }

    sendMessage = text => {
        let message = this.handleMessage(text);
        
        this._ws.sendForBroadcast(message);
    }

    handleMessage = message => {
        let UsersName = document.getElementById('usersInput').value;

        const msg = {
            name: UsersName,
            text: message,
            ip: IP
        };
        
        return msg;
    }

}

export default Controller;