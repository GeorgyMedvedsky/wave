const initialImages = [
    {
        'name': 'slider-cover',
        'url': 'https://images.unsplash.com/photo-1526342122811-2a9c8512023d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        '_id': 1
    },
    {
        'name': 'slider-1',
        'url': 'https://images.unsplash.com/photo-1543616260-4cd60315436d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        '_id': 2
    },
    {
        'name': 'slider-2',
        'url': 'https://images.unsplash.com/photo-1527731149372-fae504a1185f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        '_id': 3
    },
    {
        'name': 'slider-3',
        'url': 'https://plus.unsplash.com/premium_photo-1690451118845-b356b796e7dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        '_id': 4
    },
    {
        'name': 'slider-4',
        'url': 'https://images.unsplash.com/photo-1537519646099-335112f03225?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        '_id': 5
    },
    {
        'name': 'slider-4',
        'url': 'https://images.unsplash.com/photo-1587835804074-90f365956699?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        '_id': 6
    },
    {
        'name': 'slider-4',
        'url': 'https://images.unsplash.com/photo-1583897167431-9d7b49f590e8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        '_id': 7
    },
    {
        'name': 'slider-4',
        'url': 'https://images.unsplash.com/photo-1482531007909-192ac913980a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        '_id': 8
    }
];

const ACTIVE_TAB_COLOR = '#00B2A0';
const DEFAULT_TAB_COLOR = '#FFFFFF';

function slider(){
    const slider = document.querySelector('.slider');
    const tabs = Array.from(slider.querySelectorAll('.pagination__item'));
    let currentTab = tabs[0];
    let timerId = null;

    currentTab.style.fill = ACTIVE_TAB_COLOR;
    slider.style.backgroundImage = `url(${initialImages[0].url})`;
    
    tabs.forEach(tab => {
        tab.addEventListener('click', evt => handleSlider(evt));
    });
    timerId = autoscroll(currentTab);

    function handleSlider(evt){
        clearInterval(timerId);
        currentTab = evt.target;
        handlerTabSwitch(currentTab);
        handleImageSwitch(currentTab);
        setTimeout(() => timerId = autoscroll(currentTab), 12000);
    }
    function handlerTabSwitch(currentTab){
        tabs.find(tab => tab.id === currentTab.id).style.fill = ACTIVE_TAB_COLOR;
        tabs.forEach(tab => {
            if(tab.id !== currentTab.id){
                tab.style.fill = DEFAULT_TAB_COLOR;
            }
        });
    };
    function handleImageSwitch(currentTab){
        let currentImage = initialImages.find(image => image._id === Number(currentTab.id));
        slider.style.backgroundImage = `url(${currentImage.url})`;
    }
    function autoscroll(currentTab){
        // let limit = 0;
        let tabIndex = tabs.indexOf(currentTab);
        return setTimeout(function tic(){
            // limit++;
            if(tabIndex === tabs.length){
                tabIndex = 0;
            } else {
                handlerTabSwitch(tabs[tabIndex]);
                handleImageSwitch(tabs[tabIndex]);
                tabIndex++;
            }
            timerId = setTimeout(tic, 5000);
            // if(limit === 50) clearTimeout(timerId);
        }, 5000);
    }
}

slider();