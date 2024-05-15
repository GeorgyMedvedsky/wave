import './vendor/normalize.css';
import './scss/index.scss';
import Slider from "./scripts/slider";

const menuButton = document.querySelector('.menu__button');
const menu = document.querySelector('.menu__list');

function setViewport() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function handleMenuVisible() {
    menu.classList.toggle('menu__list_open');
}
//Menu

menuButton.addEventListener('mousedown', handleMenuVisible);

Slider();
setViewport();
window.addEventListener('resize', setViewport());