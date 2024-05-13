const ACTIVE_TAB_COLOR = '#00B2A0';
const DEFAULT_TAB_COLOR = '#FFFFFF';

function Slider(){
    const slider = document.querySelector('.slider');
    const sliderImages = Array.from(slider.querySelectorAll('.slider__image'));
    const tabList = slider.querySelector('.slider__pagination');
    const tabTemplate = document.querySelector('#tab-template').content;

    createTabs(sliderImages);

    const tabs = Array.from(slider.querySelectorAll('.pagination__item'));
    let currentTab = tabs[0];
    let currentImage = sliderImages[0];
    changeTab(currentTab);
    changeImage(currentImage)

    let autoscrollId = autoscroll(currentTab, 7000);

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', evt => handleTab(evt, index));
    });

    function createTabs(initialArr){
        for(let i = 0; i < initialArr.length; i++){
            const tabElement = tabTemplate.querySelector('.tab-item').cloneNode(true);
            tabList.append(tabElement);
        }
    }
    function changeTab(current, prev){
        current.style.fill = ACTIVE_TAB_COLOR;
        if(prev && prev !== current) prev.style.fill = DEFAULT_TAB_COLOR;
        currentTab = current;
    }
    function changeImage(current, prev){
        current.classList.remove('slider__image_hidden');
        if(prev && prev !== current) prev.classList.add('slider__image_hidden');
        currentImage = current
    }
    function handleTab(evt, index){
        clearTimeout(autoscrollId);
        changeTab(evt.target, currentTab);
        changeImage(sliderImages[index], currentImage)
    }
    function autoscroll(current, delay){
        let tabIndex = tabs.indexOf(current);
        changeImage(sliderImages[tabIndex], currentImage);
        return setInterval(() => {
            if(tabIndex === tabs.length) {
                tabIndex = 0;
            }
            changeTab(tabs[tabIndex], currentTab);
            changeImage(sliderImages[tabIndex], currentImage);
            tabIndex++;

        }, delay);
    }
}

export default Slider;