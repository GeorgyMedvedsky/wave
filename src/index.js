import './vendor/normalize.css';
import './styles/style.css';
import Slider from "./scripts/slider";

function setViewport() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

Slider();
setViewport();
window.addEventListener('resize', setViewport());