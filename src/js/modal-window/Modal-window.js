import { sendGet, sendPostCheckAdmin, sendPostCheckUser, sendGetUsers } from '../../REST';
import { drawUsersOnline } from '../draw-users-online/draw-users-online';
import Socket from '../../WSocket';
import Modal from '../../Modal';

class ModalWindows {

    constructor() {
        this._io = new Socket();
        this._modal = new Modal();
        this._ipAdress = IP;
        this.AdmBtn = document.getElementById('adm-btn');
        this.AdmBtnClose = document.getElementById('modalAdminClose');
        this.AdmBtnSend = document.getElementById('adm-btn-send');
        this.UserBtnSend = document.getElementById('user-btn-send');

        this.modalUser = document.getElementsByClassName('window-logIn-user')[0];
        this.modalAdmin = document.getElementsByClassName('window-logIn-admin')[0];

        this.UsersVal = document.getElementById('usersInput');
        this.AdmPasVal = document.getElementById('adminInputPas');
        this.AdmLogVal = document.getElementById('adminInputLog');

        this.erroeUserImg = document.getElementsByClassName('modal-users-error__logo')[0];
        this.erroeUserText = document.getElementsByClassName('modal-users-error__text')[0];

        this.errorAbminImg = document.getElementsByClassName('modal-admin-error__logo')[0];
        this.errorAdminText = document.getElementsByClassName('modal-admin-error__text')[0];

        this._status = false;
        this.inin()
    }

    inin = () =>{
        this._io.getOline(drawUsersOnline);
    };

    checkUser = () => {

        this.UserBtnSend.addEventListener("click", (e) => {

            e.preventDefault();

            let valInpUsers = this.UsersVal.value;
            let userVal = this.validation(valInpUsers);

            if (!userVal) {
                this.modalUser.style.display = 'block';
                this.erroeUserImg.style.display = 'block';
                this.erroeUserText.style.display = 'block';

                return;
            }

            const data = {
                name: this.UsersVal.value,
                ip: this._ipAdress
            };

            let checkUser = sendPostCheckUser(data);

            // let checkUser = sendForCheck(data);

            if(checkUser.status === true){
                this.modalUser.style.display = 'none';
                this.erroeUserImg.style.display = 'none';
                this.erroeUserText.style.display = 'none';
                sendGet(drawUsersOnline);

                // setInterval(() => {sendGet(drawUsersOnline)}, 2000);
            } else {
                this.modalUser.style.display = 'block';
                this.erroeUserImg.style.display = 'block';
                this.erroeUserText.style.display = 'block';
            }
        });
    }

    showAdmin = () => {
        this.AdmBtn.onclick = e => {

            e.preventDefault();
            this.modalAdmin.style.display = 'block';
        };
    }

    closeAdmin = () => {
        this.AdmBtnClose.onclick = e => {
            e.preventDefault();
            this.modalAdmin.style.display = 'none';
        };
    }

    checkAdmin = () => {

        this.AdmBtnSend.addEventListener('click', (e) => {

            e.preventDefault();

            let passwordValue = this.AdmPasVal.value;
            let loginValue = this.AdmLogVal.value;

            let admLog = this.validation(loginValue);
            let admPass = this.validation(passwordValue);

            if ( !admLog || !admPass ) {
                this.modalAdmin.style.display = 'block';
                this.errorAbminImg.style.display = 'block';
                this.errorAdminText.style.display = 'block';
            }

            const data = {
                login: this.AdmLogVal.value,
                password: this.AdmPasVal.value
            };

            let checkAdmin = sendPostCheckAdmin(data);

            if(checkAdmin.status === true) {
                document.location.href = './admin/';
            } else {
                this.modalAdmin.style.display = 'block';
                this.errorAbminImg.style.display = 'block';
                this.errorAdminText.style.display = 'block';
            }
        });
    }

    validation = valValue => {
        let validLog = /[-_0-9a-z]{3,12}/i;

        if (valValue.length > 12 || valValue.length < 3) {

            return false;
        } else if (typeof valValue !== 'string') {

            return false;
        } else if (valValue.indexOf(' ') !== -1) {

            return false;
        } else if (validLog.test(valValue) === true) {

            return true;
        } else {

            return false;
        }
    }
}

export default ModalWindows;