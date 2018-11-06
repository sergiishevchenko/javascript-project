function tabs() {

    // Tabs for windows "Остекленение балконов и лоджий"

    let tabs = document.querySelectorAll('.glazing_block'),
        links = document.querySelectorAll('.link'),
        images = document.querySelectorAll('.image'),
        infoTabs = document.querySelector('.glazing_slider'),
        tabsContent = document.getElementsByName('tree');
        

    function hideTabsContent(a) {
        for (let i = a; i < tabsContent.length; i++) {
            links[i].classList.remove('active');
            tabsContent[i].classList.remove('show');
            tabsContent[i].classList.add('hide');
        }
    }

    hideTabsContent(1);

    function showTabsContent(b) {
        if (tabsContent[b].classList.contains('hide')) {
            tabsContent[b].classList.remove('hide');
            tabsContent[b].classList.add('show');
        }
    }

    infoTabs.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('glazing_block') || target.classList.contains('link') || target.classList.contains('image')) {
            for (let i = 0; i < tabs.length; i++) {
                if (target == tabs[i] || target == links[i] || target == images[i]) {
                    hideTabsContent(0);
                    links[i].classList.add('active');
                    showTabsContent(i);
                    break;
                }
            }
        }

    });


    // Tabs for finishing work

    let tabsFinish = document.querySelectorAll('.decor_link'),
        infoFinish = document.querySelector('.decoration_slider'),
        dLink = document.querySelectorAll('.d_link'),
        decorItem = document.querySelectorAll('.decoration_item'),
        tabsContentFinish = document.querySelectorAll('.decor');


    function hideTabsContentFinish(a) {
        for (let i = a; i < tabsContentFinish.length; i++) {
            dLink[i].classList.remove('after_click');
            tabsContentFinish[i].classList.remove('show');
            tabsContentFinish[i].classList.add('hide');
        }
    }   

    hideTabsContentFinish(1);

    function showTabsContentFinish(b) {
        if (tabsContentFinish[b].classList.contains('hide')) {
            tabsContentFinish[b].classList.remove('hide');
            tabsContentFinish[b].classList.add('show');
        }
    }

    infoFinish.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('decor_link') || target.classList.contains('d_link') || target.classList.contains('decoration_item')) {
            for (let i = 0; i < tabsFinish.length; i++) {
                if (target == tabsFinish[i] || target == dLink[i] || target == decorItem[i]) {
                    hideTabsContentFinish(0);
                    dLink[i].classList.add('after_click');
                    showTabsContentFinish(i);
                    break;
                }
            }
        }

    });
}

module.exports = tabs;