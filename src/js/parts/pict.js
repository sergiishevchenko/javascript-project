function pict() {
    
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
}

module.exports = pict;