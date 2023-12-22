"use strict"

let body = document.querySelector('body');
let cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    // cursor moving
    cursor.style.top = `${e.pageY}px`;
    cursor.style.left = `${e.pageX}px`;

    // body moving
    body.style.backgroundPositionX = `${e.pageX / -5}px`;
    body.style.backgroundPositionY = `${e.pageY / -5}px`;

    // adding elements to body
    let elem = document.createElement('div');
    elem.className = 'elem';
    body.prepend(elem);

    // move element
    elem.style.left = cursor.getBoundingClientRect().x + 'px';
    elem.style.top = cursor.getBoundingClientRect().y - 10 + 'px';

    setTimeout(() => {
        let text = document.querySelectorAll('.elem')[0];
        let dirX = Math.random() < 0.5 ? -1 : 1;
        let dirY = Math.random() < 0.5 ? -1 : 1;

        text.style.left = parseInt(text.style.left) - (dirX * (Math.random() * 200)) + 'px';
        text.style.top = parseInt(text.style.top) - (dirY * (Math.random() * 200)) + 'px';
        text.style.opacity = 0;
        text.style.transform = 'scale(0.25)';
        text.innerHTML = showRandomText();

        setTimeout(() => {
            elem.remove()
        }, 1000);

    }, 10)
});

function showRandomText() {
    const elems = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];
    let rndElement = elems[getRandomNum(0, elems.length - 1)];

    return rndElement;
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}