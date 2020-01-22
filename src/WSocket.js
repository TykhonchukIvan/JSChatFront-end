import io from 'socket.io-client';

class WSocket {
    constructor() {
        this._wsocket = io.connect();

        this._wsocket.onopen = this.onOpen.bind(this);
        this._wsocket.onclose = this.onClose.bind(this);
    }

    onOpen = () => {
        console.log('CONNECTION');
    }

    setOnMessage = callback => {
        this._wsocket.on('message', data => {
            callback(JSON.parse(data));
        });
    }
    
    getOline = callback => {
        this._wsocket.on('online', data => {
            callback(JSON.parse(data));
        });
    }

    onClose = () => {
        console.log('DISCONNECTION');
        this._wsocket.close();
    }

    sendForBroadcast = data => {
        this._wsocket.emit('message', JSON.stringify(data));
    }
    
    sendOnline = data => {
        this._wsocket.emit('online', JSON.stringify(data));
    }
}

export default WSocket;