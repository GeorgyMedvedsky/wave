import './vendor/normalize.css';
import './styles/style.css';
import Slider from "./scripts/slider";

Slider();

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});