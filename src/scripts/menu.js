import { 
    page,
    appClasses,
    menuButtonIcons
 } from './utils/constants';

const menu = document.querySelector('.menu__list');
const menuButton = document.querySelector('.menu__button');
const state = {
    open: false,
    toggleVisible() { this.open = !this.open }
};

function handleToggleClasses() {
    menu.classList.toggle(appClasses.menuVisible);
    page.classList.toggle(appClasses.pageLocked);
}

function handleToggleMenu() {
    if(!state.open) {
        state.toggleVisible();
        handleToggleClasses();
        menuButton.innerHTML = menuButtonIcons.xmark;
    } else {
        state.toggleVisible();
        handleToggleClasses();
        menuButton.innerHTML = menuButtonIcons.bars;
    }
}

export function setToggleMenuHandler() {
    menuButton.addEventListener('click', handleToggleMenu);
}