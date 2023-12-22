"use strict"

let body = document.querySelector('body');
let cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.pageY}px`;
    cursor.style.left = `${e.pageX}px`;

    body.style.backgroundPositionX = `${e.pageX / -5}px`;
    body.style.backgroundPositionY = `${e.pageY / -5}px`;
})
