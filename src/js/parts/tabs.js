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

    let decorItem = document.querySelectorAll(".decoration_item"),
        dLink = document.querySelectorAll(".d_link"),
        tabsFinish = document.querySelectorAll(".decor_link"),
        tabsContentFinish = document.querySelectorAll(".decor");

    function hideTabContent(a) {
        for (let i = a; i < tabsContentFinish.length; i++) {
            dLink[i].classList.remove("after_click");
            dLink[i].classList.add("no_click");
            tabsFinish[i].classList.remove("click_link");
            tabsContentFinish[i].classList.remove("show");
            tabsContentFinish[i].classList.add("hide");
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        dLink[b].classList.remove("no_click");
        dLink[b].classList.add("after_click");
        tabsFinish[b].classList.add("click_link");
        tabsContentFinish[b].classList.add("show");
        tabsContentFinish[b].classList.remove("hide");
    }

    decorItem.forEach(function(link, index) {
        link.addEventListener("click", function(event) {
        for (let i = 0; i < decorItem.length; i++) {
            if (event.target == dLink[i] || event.target == tabsFinish[i]) {
            hideTabContent(0);
            showTabContent(index);
            break;
            }
        }
        });
    });
}

module.exports = tabs;