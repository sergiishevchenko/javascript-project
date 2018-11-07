window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Modal window for button "Вызвать замерщика"

    let btn = document.querySelector('.header_btn'),
        popupEngineer = document.querySelector('.popup_engineer'),
        overlay = document.querySelector('.overlay');

    btn.addEventListener('click', function() {
        popupEngineer.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    overlay.addEventListener('click', function(e) {
        if (!e.target.closest('.popup_form')) {
            popupEngineer.style.display = 'none';
            btn.classList.remove('more-splash');
            document.body.style.overflow = '';
        }
    });


    // Modal windows for popup "Заказать обратный звонок" и "Спросите у нашего специалиста"

    let phoneLink = document.querySelectorAll('.phone_link'),
        popup = document.querySelector('.popup'),
        over = document.querySelector('.over');

    for (let i = 0; i < phoneLink.length; i++) {

        phoneLink[i].addEventListener('click', function(e) {
            e.preventDefault();
            popup.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        over.addEventListener('click', function(e) {
            if (!e.target.closest('.popup_form')) {
                popup.style.display = 'none';
                phoneLink[i].classList.remove('more-splash');
                document.body.style.overflow = '';
            }
        });

    }


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


    // Tabs for finishing work 1-й вариант

    // let tabsFinish = document.querySelectorAll('.decor_link'),
    //     infoFinish = document.querySelector('.decoration_slider'),
    //     dLink = document.querySelectorAll('.d_link'),
    //     decorItem = document.querySelectorAll('.decoration_item'),
    //     tabsContentFinish = document.querySelectorAll('.decor');


    // function hideTabsContentFinish(a) {
    //     for (let i = a; i < tabsContentFinish.length; i++) {
    //         dLink[i].classList.remove('after_click');
    //         tabsFinish[i].classList.remove('click_link');
    //         tabsContentFinish[i].classList.remove('show');
    //         tabsContentFinish[i].classList.add('hide');
    //     }
    // }   

    // hideTabsContentFinish(1);

    // function showTabsContentFinish(b) {
    //     if (tabsContentFinish[b].classList.contains('hide')) {
    //         tabsContentFinish[b].classList.remove('hide');
    //         tabsContentFinish[b].classList.add('show');
    //     }
    // }

    // infoFinish.addEventListener('click', function(event) {
    //     let target = event.target;
    //     if (target && target.classList.contains('decor_link') || target.classList.contains('d_link') || target.classList.contains('decoration_item')) {
    //         for (let i = 0; i < tabsFinish.length; i++) {
    //             if (target == tabsFinish[i] || target == dLink[i] || target == decorItem[i]) {
    //                 hideTabsContentFinish(0);
    //                 dLink[i].classList.add('after_click');
    //                 tabsFinish[i].classList.add('click_link');
    //                 showTabsContentFinish(i);
    //                 break;
    //             }
    //         }
    //     }

    // });

    // Tabs for finishing work 2-й вариант

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

    // Timer

    let deadline = '2019-07-04 00:00:00';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)) % 60),
            days = Math.floor((t/(1000*60*60*24)));


        if (days < 10) {
            days = `0${days}`;
        }
        if (hours < 10) {
            hours = `0${hours}`;
        }
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        if (seconds < 10) {
            seconds = `0${seconds}`; 
        }
    
        return {
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock () {
            let t = getTimeRemaining(endtime);
                days.textContent = t.days;
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);


    // Tabs for button "Рассчитать стоимость"

    let tabCalc = document.querySelectorAll('.glazing_price_btn'),
        popupCalc = document.querySelector('.popup_calc'),
        popupCalcClose = document.querySelector('.popup_calc_close');

    for (let i = 0; i < tabCalc.length; i++) {

        tabCalc[i].addEventListener('click', function() {
            popupCalc.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        popupCalcClose.addEventListener('click', function() {
            popupCalc.style.display = 'none';
            tabCalc[i].classList.remove('more-splash');
            document.body.style.overflow = '';
            widthWindow.value = '';
            heightWindow.value = '';
        });

    }

    // Увеличение картинок (balcon_icons)

    let balconIcons = document.querySelectorAll('.icons'),
        bigIcons = document.querySelectorAll('.big_icons'),
        balcony = document.querySelector('.balcon_icons');

    function hideIcons(a) {
        for (let i = a; i < bigIcons.length; i++) {
            balconIcons[i].classList.remove('iconsA');
            bigIcons[i].classList.remove('show');
            bigIcons[i].classList.add('hide');
        }
    }

    hideIcons(1);

    function showIcons(b) {
        if (bigIcons[b].classList.contains('hide')) {
            bigIcons[b].classList.remove('hide');
            bigIcons[b].classList.add('show');
        }
    }

    balcony.addEventListener('click', function(event) {
        event.preventDefault();
        let target = event.target;
        if (target && target.classList.contains('icons')) {
            for (let i = 0; i < balconIcons.length; i++) {
                if (target == balconIcons[i]) {
                    hideIcons(0);
                    balconIcons[i].classList.add('iconsA');
                    showIcons(i);
                    break;
                }
            }
        }
    });

    // Input (поля "Ширина" и "Высота")

    let widthWindow = document.getElementById('width'),
        heightWindow = document.getElementById('height');

    widthWindow.addEventListener('input', function () {
        this.value = this.value.replace(/\D/, '');
    });

    heightWindow.addEventListener('input', function () {
        this.value = this.value.replace(/\D/, '');
    });

    // Вызов окна popup_calc_profile

    let popupCalcButton = document.querySelector('.popup_calc_button'),
        popupCalcProfile = document.querySelector('.popup_calc_profile'),
        checkbox = document.querySelectorAll('.checkbox'),
        popupCalcProfileClose = document.querySelector('.popup_calc_profile_close');

    popupCalcButton.addEventListener('click', function(e) {
        if (widthWindow.value == 0 || heightWindow.value == 0) {
            e.preventDefault();
        } else {
            popupCalcProfile.style.display = 'block';
            popupCalc.style.display = 'none';
            popupCalc.classList.remove('more-splash');
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }
    });

    popupCalcProfileClose.addEventListener('click', function() {
        popupCalcProfile.style.display = 'none';
        popupCalcButton.classList.remove('more-splash');
        popupCalc.style.display = 'none';
        popupCalc.classList.remove('more-splash');
        document.body.style.overflow = '';
        widthWindow.value = '';
        heightWindow.value = '';
        checkbox[0].checked = false;
        checkbox[1].checked = false;
    });

    
    // Вызов окна popup_calc_end

    let popupCalcProfileButton = document.querySelector('.popup_calc_profile_button'),
        popupCalcEnd = document.querySelector('.popup_calc_end'),
        input = document.querySelectorAll('.form_input'),
        popupCalcEndClose = document.querySelector('.popup_calc_end_close');

    popupCalcProfileButton.addEventListener('click', function(e) {
        if (checkbox[0].checked === false && checkbox[1].checked === false) {
            e.preventDefault();
        } else {
            popupCalcEnd.style.display = 'block';
            popupCalcProfile.style.display = 'none';
            popupCalcButton.classList.remove('more-splash');
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
            checkbox[0].addEventListener('click', function() {
                checkbox[1].checked = false;
            });
        
            checkbox[1].addEventListener('click', function() {
                checkbox[0].checked = false;
            });
        }
    });

    popupCalcEndClose.addEventListener('click', function() {
        popupCalcEnd.style.display = 'none';
        popupCalcProfileButton.classList.remove('more-splash');
        popupCalc.style.display = 'none';
        popupCalc.classList.remove('more-splash');
        document.body.style.overflow = '';
        input[16].value = '';
        input[17].value = '';
        checkbox[0].checked = false;
        checkbox[1].checked = false;
        widthWindow.value = '';
        heightWindow.value = '';
    });

    // Forms

    let message = {
        loading: 'Отправка',
        success: 'Отправлено!',
        failure: 'Ошибка...'
        };

    let form = document.getElementsByTagName('form'),
        typeWindows = document.querySelectorAll('.big_icons'),
        typeCovering = document.querySelector('.popup_calc_profile_content select'),
        statusMessage = document.createElement('div');

    let formData = new FormData();
    
    let inputTel = document.getElementsByName('user_phone');
    
    for (let i = 0; i < inputTel.length; i++) {
        inputTel[i].addEventListener('input', function () {
            this.value = this.value.replace(/\D/, '');
        });
    }
    
    checkbox[0].addEventListener('click', function() {
        checkbox[1].checked = false;
        formData.append('Стиль остекленения: ', "Cold");
    });

    checkbox[1].addEventListener('click', function() {
        checkbox[0].checked = false;
        formData.append('Стиль остекленения: ', "Warm");
    });

    statusMessage.classList.add('status');
    
    popupCalcButton.addEventListener('click', function() {
        formData.append(widthWindow.getAttribute('placeholder'), widthWindow.value);
        formData.append(heightWindow.getAttribute('placeholder'), heightWindow.value);
        for (let i = 0; i < typeWindows.length; i++) {
            formData.append('Type of window: ', typeWindows[i].id);
        }
    });
    
    

    popupCalcProfileButton.addEventListener('click', function() {
        formData.append(typeCovering.getAttribute('id'), typeCovering.value);
    });

    for (let i = 0; i < form.length; i++) {

        form[i].addEventListener('submit', function(event) {
            event.preventDefault();
            form[i].appendChild(statusMessage);
    
            let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    
            

            for (let i = 0; i < input.length; i++) {
                formData.append(input[i].getAttribute('name'), input[i].value);
            }
        
            let obj = {};

            formData.forEach(function(value, key) {
                obj[key] = value;
            });
    
            let json = JSON.stringify(obj);
    
            request.send(json);
    
            request.addEventListener('readystatechange', function() {
                if (request.readyState < 4 ) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });
    
            for (let i = 0; i < input.length; i++){
                input[i].value = '';
            }
    
        });
    }

    // Pictures

    let ourWorks = document.querySelectorAll('.our_works'),
        div = document.createElement('div'),
        overlayIcons = document.body.appendChild(div);

    div.classList.add('overlayIcons');

    for (let i = 0; i < ourWorks.length; i++) {

        ourWorks[i].addEventListener('click', function(event) {
            event.preventDefault();
            overlayIcons.style.display = 'block';
            ourWorks[i].src = "img/our_works/big_img/"+(i+1)+".png";
            ourWorks[i].style.display = 'block';
            this.classList.add('forIcons');
        })
    
        overlayIcons.addEventListener('click', function() {
            overlayIcons.style.display = 'none';
            ourWorks[i].style.display = 'none';
            ourWorks[i].classList.remove('forIcons');
            ourWorks[i].src = "img/our_works/"+(i+1)+".png";
            ourWorks[i].style.display = 'block';
        })    
    }
    
    // Появление окна

    // setTimeout(popupUp, 60000);

    // function popupUp() {
    //     let modal = document.querySelector('.popup');
    //     modal.style.display = 'block';
    // }
});