import './login-page.less';
import ViewLogin from './login-page-view';
import UserCheck from './logik-cher-user';

const init  = () => {

    const viewLogin = new ViewLogin();
    viewLogin.initLogin();
    usersCheck();
};

const usersCheck = () => {
    const userCheck = new UserCheck();
    userCheck.checkUser();
};

init();