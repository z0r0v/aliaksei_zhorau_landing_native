import * as $ from '../../node_modules/jquery';

const line1= document.createElement('div');
const line2 = document.createElement('div');
const line3= document.createElement('div');
line1.classList.add('line');
line2.classList.add('line');
line3.classList.add('line');
const load3 = document.createElement('div');
load3.classList.add('load-3');
load3.appendChild(line1);
load3.appendChild(line2);
load3.appendChild(line3);
$('header').find('picture').append(load3);
$('body').find('picture').append(load3);

const promise = new Promise((resolve, reject) => {
    resolve();
});

promise.then(function () {
    [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function () {
            img.removeAttribute('data-src');
        };
    });
    $('body').find('.load-3').addClass('displayed');
});
