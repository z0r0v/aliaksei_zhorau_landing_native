import * as $ from '../../node_modules/jquery';

// const promise = new Promise((resolve, reject) => {
//     resolve();
// });
//
// promise.then(function () {
//     [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
//         img.setAttribute('src', img.getAttribute('data-src'));
//         img.onload = function () {
//             img.removeAttribute('data-src');
//         };
//     });
//     [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
//         img.setAttribute('src', img.getAttribute('data-src'));
//         img.onload = function () {
//             img.removeAttribute('data-src');
//         };
//     });
// });



[].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {

    $('body').find('img').css('display', 'none');

    img.setAttribute('src', img.getAttribute('data-src'));

    $('body').find('.load-3').css('display', 'none');
    $('body').find('img').css('display', 'block');

    img.onload = function () {
        img.removeAttribute('data-src');
    };
});

