import './admin-page-style.less';
import ViewAdmin from './View-admin';

const init  = () => {

    const viewAdmin = new ViewAdmin();
    viewAdmin.initAdmin();

};

init();