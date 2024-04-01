const initialImages = [
    {
            name: 'slider-1',
        url: 'images/slider/slider-1.jpg',
        _id: 1
    },
    {
        name: 'slider-2',
        url: 'images/slider/slider-2.jpg',
        _id: 2
    },
    {
        name: 'slider-3',
        url: 'images/slider/slider-3.jpg',
        _id: 3
    },
    {
        name: 'slider-4',
        url: 'images/slider/slider-4.jpg',
        _id: 4
    },
    {
        name: 'slider-5',
        url: 'images/slider/slider-5.jpg',
        _id: 5
    },
    {
        name: 'slider-6',
        url: 'images/slider/slider-6.jpg',
        _id: 6
    },
    {
        name: 'slider-7',
        url: 'images/slider/slider-7.jpg',
        _id: 7
    },
    {
        name: 'slider-8',
        url: 'images/slider/slider-8.jpg',
        _id: 8
    }
];

const ACTIVE_TAB_COLOR = '#00B2A0';
const DEFAULT_TAB_COLOR = '#FFFFFF';

function slider(){
    const slider = document.querySelector('.slider');
    const tabList = slider.querySelector('.slider__pagination');
    const tabTemplate = document.querySelector('#tab-template').content;

    createTabs(initialImages);

    const tabs = Array.from(slider.querySelectorAll('.pagination__item'));
    let currentTab = tabs[0];
    changeTab(currentTab);

    let autoscrollId = autoscroll(currentTab, 7000);

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', evt => handleTab(evt, index));
    });
    // ref?
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
    function changeImage(current){
        slider.style.backgroundImage = `url(${current.url})`;
    }
    function handleTab(evt, index){
        clearTimeout(autoscrollId);
        changeTab(evt.target, currentTab);
        changeImage(initialImages[index])
    }
    function autoscroll(current, delay){
        let tabIndex = tabs.indexOf(current);
        changeImage(initialImages[tabIndex]);
        return setInterval(() => {
            if(tabIndex === tabs.length) {
                tabIndex = 0;
            }
            changeTab(tabs[tabIndex], currentTab);
            changeImage(initialImages[tabIndex]);
            tabIndex++;

        }, delay);
    }
}

slider();