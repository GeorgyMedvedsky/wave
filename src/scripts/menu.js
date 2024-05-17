import { 
    page,
    appClasses,
    menuButtonIcons
} from './utils/constants';

//FIXME: Заменить связь с хедером для закрытия меню по outside клику
const header = document.querySelector('.header')
const menu = document.querySelector('.menu__list');
const menuItems = Array.from(menu.children);
const menuButton = document.querySelector('.menu__button');
const state = {
    open: false,
    toggleVisible() { this.open = !this.open }
};

function openMenu() {
    menu.classList.add(appClasses.menuVisible);
    page.classList.add(appClasses.pageLocked);
    menuButton.innerHTML = menuButtonIcons.xmark;
}

function closeMenu() {
    menu.classList.remove(appClasses.menuVisible);
    page.classList.remove(appClasses.pageLocked);
    menuButton.innerHTML = menuButtonIcons.bars;
}

function handleToggleMenu() {
    if(!state.open) {
        state.toggleVisible();
        openMenu();
    } else {
        state.toggleVisible();
        closeMenu();
    }
}

function handleOutsideClick(e) {
    if(e.target === header) {
        state.toggleVisible();
        closeMenu();
    }
}

export function setToggleMenuHandlers() {
    menuButton.addEventListener('click', handleToggleMenu);
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            closeMenu();
            state.toggleVisible();
        })
    });
    document.addEventListener('click', handleOutsideClick);
}