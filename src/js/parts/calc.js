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
        });

    }

    // Увеличение картинок (balcon_icons)

    let balconIcons = document.querySelectorAll('.icons'),
        bigIcons = document.querySelectorAll('.big_icons'),
        balcony = document.querySelector('.balcon_icons');

    function hideIcons(a) {
        for (let i = a; i < bigIcons.length; i++) {
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
        let target = event.target;
        if (target && target.classList.contains('icons')) {
            for (let i = 0; i < balconIcons.length; i++) {
                if (target == balconIcons[i]) {
                    hideIcons(0);
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
        popupCalcProfileClose = document.querySelector('.popup_calc_profile_close');

    popupCalcButton.addEventListener('click', function() {
        popupCalcProfile.style.display = 'block';
        popupCalc.style.display = 'none';
        popupCalc.classList.remove('more-splash');
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    popupCalcProfileClose.addEventListener('click', function() {
        popupCalcProfile.style.display = 'none';
        popupCalcButton.classList.remove('more-splash');
        popupCalc.style.display = 'none';
        popupCalc.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    
    // Вызов окна popup_calc_end

    let popupCalcProfileButton = document.querySelector('.popup_calc_profile_button'),
        popupCalcEnd = document.querySelector('.popup_calc_end'),
        popupCalcEndClose = document.querySelector('.popup_calc_end_close');

    popupCalcProfileButton.addEventListener('click', function() {
        popupCalcEnd.style.display = 'block';
        popupCalcProfile.style.display = 'none';
        popupCalcButton.classList.remove('more-splash');
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    popupCalcEndClose.addEventListener('click', function() {
        popupCalcEnd.style.display = 'none';
        popupCalcProfileButton.classList.remove('more-splash');
        popupCalc.style.display = 'none';
        popupCalc.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
}

module.exports = calc;