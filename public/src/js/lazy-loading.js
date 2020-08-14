const promise = new Promise((resolve, reject) => {
    resolve();
});
promise.then(function () {
    console.log("async",new Date().getSeconds());
    [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function() {
            img.removeAttribute('data-src');
        };
    });
    [].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function() {
            img.removeAttribute('data-src');
        };
    });
});