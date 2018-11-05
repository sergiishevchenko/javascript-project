function forms() {

    // Forms

    let message = {
        loading: 'Отправка',
        success: 'Отправлено!',
        failure: 'Ошибка...'
        };

    let form = document.getElementsByTagName('form'),
        typeWindows = document.querySelectorAll('.big_icons'),
        typeCovering = document.querySelector('.popup_calc_profile_content select'),
        checkbox = document.querySelectorAll('.checkbox-custom'),
        statusMessage = document.createElement('div');

    let formData = new FormData();
    
    let inputTel = document.getElementsByName('user_phone');
    
    for (let i = 0; i < inputTel.length; i++) {
        inputTel[i].addEventListener('input', function () {
            this.value = this.value.replace(/\D/, '');
        });
    }
    
    checkbox[0].addEventListener('click', function() {
        checkbox[1].checked === false;
        formData.append('Стиль остекленения: ', "Cold");
    });

    checkbox[1].addEventListener('click', function() {
        checkbox[0].checked === false;
        formData.append('Стиль остекленения: ', "Warm");
    });

    statusMessage.classList.add('status');

    popupCalcButton.addEventListener('click', function() {
        formData.append(widthWindow.getAttribute('placeholder'), widthWindow.value);
        formData.append(heightWindow.getAttribute('placeholder'), heightWindow.value);
        for (let i = 0; i < typeWindows.length; i++) {
            formData.append('Type of window: ', typeWindows[i].id)
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
    
            let input = form[i].querySelectorAll('.form_input');

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

module.exports = forms;