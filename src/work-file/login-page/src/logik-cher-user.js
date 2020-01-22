class UserCheck {

    constructor() {

        this.UserBtnSend = document.getElementById('user-btn-send');
        this.UsersVal = document.getElementById('usersInput');
        this.erroeUserImg = document.getElementsByClassName('error__logo')[0];
        this.erroeUserText = document.getElementsByClassName('error__text')[0];
        this.bodyStyl =document.getElementsByClassName('login-container')[0];
    }

    checkUser = () => {
        this.UserBtnSend.onclick = e => {
            e.preventDefault();

            let valInpUsers = this.UsersVal.value;
            let userVal = this.validation(valInpUsers);

            if (!userVal) {
                this.erroeUserImg.style.display = "block";
                this.erroeUserText.style.display = "block";
            } else {
                this.bodyStyl.style.backgroundColor = "black";
                this.erroeUserImg.style.display = "none";
                this.erroeUserText.style.display = "none";
            }
        };
    };



    validation = valValue => {
        let validLog = /[-_0-9a-z]{3,12}/i;

        if (valValue.length > 12 || valValue.length < 3) {

            return false;
        } else if (typeof valValue !== 'string') {

            return false;
        } else if (valValue.indexOf(" ") !== -1) {

            return false;
        } else if (validLog.test(valValue) === true) {

            return true;
        } else {

            return false;
        }
    }

}

export default UserCheck;