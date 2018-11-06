function calc() {
    
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
}

module.exports = calc;