window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let calc = require('./js/parts/calc.js'),
        memory = require('./js/parts/memory.js'),
        modal = require('./js/parts/modal.js'),
        pict = require('./js/parts/pict.js'),
        tabs = require('./js/parts/tabs.js'),
        timer = require('./js/parts/timer.js');

    calc();
    memory();
    modal();
    pict();
    tabs();
    timer();
});