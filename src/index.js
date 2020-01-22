import './style/main.less';
import View from './View';
import Controller from './Controller';
import ModalWindows from './js/modal-window/Modal-window';
import Smile from "./js/smile-controller/Smile";

const init  = () => {
    const view = new View();
    const controller = new Controller(view);

    showWind();
    showSmile();
};

const showWind = () => {
    const modalWindows = new ModalWindows();
    
    modalWindows.checkUser();
    modalWindows.showAdmin();
    modalWindows.closeAdmin();
    modalWindows.checkAdmin();
};

const showSmile = () => {
    const smileShow = new Smile();

    smileShow.smileShow ();
    smileShow.clickSmile();
};

init();