import * as $ from '../../node_modules/jquery';
// import img --------------------------------
// import javascriptImg from '../img/banners/js.jpg';
// import jqueryImg from '../img/banners/jquery.jpg';
// import vueImg from '../img/banners/vue.jpg';
import sassImg from '../img/banners/scss.jpg';
import lessImg from '../img/banners/less.jpg';
import magentoImg from '../img/banners/magento2.jpg';
import prestashopImg from '../img/banners/presto.jpg';
import html5Img from '../img/banners/html5.jpg';
import cssImg from '../img/banners/css3.jpg';
import flexBoxImg from '../img/banners/flexbox.jpg';
import gridImg from '../img/banners/grid.jpg';
import gulpImg from '../img/banners/gulp.jpg';
import gruntImg from '../img/banners/grunt.jpg';
import webpackImg from '../img/banners/webpack.jpg';
import compassImg from '../img/banners/compass.jpg';
import mysqlImg from '../img/banners/mysql.jpg';
import apatcheImg from '../img/banners/apatche2.jpg';
import nginxImg from '../img/banners/nginx.jpg';
import gitImg from '../img/banners/git.jpg';
import phpImg from '../img/banners/php.jpg';
import xmlImg from '../img/banners/xml.jpg';
import figmaImg from '../img/banners/figma.jpg';
import photoshopImg from '../img/banners/photoshop.jpg';
import ubuntuImg from '../img/banners/ubuntu.jpg';
import windowsImg from '../img/banners/windows.jpg';
import appleImg from '../img/banners/aple.jpg';


const promise = new Promise((resolve, reject) => {
    resolve();
});
const getBgUrl = (sliderArray) => {
    sliderArray.forEach(function (element) {
        if (window.matchMedia("(max-width: 978px)").matches) {
            $(`.slick-slider__item.${element.element}`).css("background-image", "none");
        } else {
            $(`.slick-slider__item.${element.element}`).css("background-image", element.url);
        }
    });
}

const sliderArray = [
    // {element: 'javascript', url: `url(dist/${javascriptImg})`},
    // {element: 'jquery', url: `url(dist/${jqueryImg})`},
    // {element: 'vue', url: `url(dist/${vueImg})`},
    {element: 'sass', url: `url(dist/${sassImg})`},
    {element: 'less', url: `url(dist/${lessImg})`},
    {element: 'magento', url: `url(dist/${magentoImg})`},
    {element: 'prestashop', url: `url(dist/${prestashopImg})`},
    {element: 'html5', url: `url(dist/${html5Img})`},
    {element: 'cssImg', url: `url(dist/${cssImg})`},
    {element: 'flexBox', url: `url(dist/${flexBoxImg})`},
    {element: 'grid', url: `url(dist/${gridImg})`},
    {element: 'gulp', url: `url(dist/${gulpImg})`},
    {element: 'grunt', url: `url(dist/${gruntImg})`},
    {element: 'webpack', url: `url(dist/${webpackImg})`},
    {element: 'compass', url: `url(dist/${compassImg})`},
    {element: 'mysql', url: `url(dist/${mysqlImg})`},
    {element: 'apatche', url: `url(dist/${apatcheImg})`},
    {element: 'nginx', url: `url(dist/${nginxImg})`},
    {element: 'git', url: `url(dist/${gitImg})`},
    {element: 'php', url: `url(dist/${phpImg})`},
    {element: 'xml', url: `url(dist/${xmlImg})`},
    {element: 'figma', url: `url(dist/${figmaImg})`},
    {element: 'photoshop', url: `url(dist/${photoshopImg})`},
    {element: 'ubuntu', url: `url(dist/${ubuntuImg})`},
    {element: 'windows', url: `url(dist/${windowsImg})`},
    {element: 'apple', url: `url(dist/${appleImg})`},
];

promise.then(function () {
    getBgUrl(sliderArray);
    [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function () {
            img.removeAttribute('data-src');
        };
    });
    [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function () {
            img.removeAttribute('data-src');
        };
    });
});