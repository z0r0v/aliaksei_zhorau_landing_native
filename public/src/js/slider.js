import * as $ from '../../node_modules/jquery';
import '../../node_modules/slick-carousel';
$('.slick-slider').slick(
    {
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        pauseOnFocus:true,
        speed:500,
        swipeToSlide:true,
    }
);
