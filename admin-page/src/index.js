import './style/style.less';
import View from './js/View';
// import Logik from "./js/logik";

const init  = () => {

    const viewAdmin = new View();
    viewAdmin.initAdmin();

};

// const logic = () => {
//
//     const Logik = new Logik();
//     Logik.comeToChat();
//
// };

init();

// logic();

const comeToChat = () =>{
    let btnCht = document.getElementById('btnCht');
    btnCht.onclick = e => {
        e.preventDefault();
        document.location.href = '../';
        console.log('asd')
    }
};
comeToChat();

