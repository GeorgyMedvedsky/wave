import './vendor/normalize.css';
import './scss/index.scss';
import setSlider from "./scripts/slider";
import { setToggleMenuHandler } from './scripts/menu';

function setViewport() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setViewport();
setToggleMenuHandler();
setSlider();
window.addEventListener('resize', setViewport());