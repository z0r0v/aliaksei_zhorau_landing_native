import * as $ from '../../node_modules/jquery';
import '../../node_modules/slick-carousel';

let data = {
    slider: '.slick-slider',
    skilsBox: '.skils-box',
    slickDots: '.slick-dots',
};

let methods = {};


$(data.slider).slick(
    {
        // autoplay: true,
        // autoplaySpeed: 3000,
        arrows: false,
        pauseOnFocus: true,
        speed: 500,
        swipeToSlide: true,
        dots: true
    }
);



function getSlide(type) {
    let slide;

    function getDots(number) {
        $(data.slickDots).find("#slick-slide-control" + number).parent().trigger("click");
    }

    function issJavascript() {
        getDots("00");
    }

    function isJquery() {
        getDots("01");
    }

    function isVue() {
        getDots("02");
    }

    function isCss() {
        getDots("03");
    }

    function isSass() {
        getDots("04");
    }

    function isLess() {
        getDots("05");
    }

    function isFlexBox() {
        getDots("06");
    }

    function isGrid() {
        getDots("07");
    }

    function isHtml() {
        getDots("08");
    }

    function isGulp() {
        getDots("09");
    }

    function isGrunt() {
        getDots("010");
    }

    function isWebpack() {
        getDots("011");
    }

    function isCompas() {
        getDots("012");
    }

    function isMagento() {
        getDots("013");
    }

    function isPrestashop() {
        getDots("014");
    }

    function isMsql() {
        getDots("015");
    }

    function apatche2() {
        getDots("016");
    }

    function isNginx() {
        getDots("017");
    }

    function isGit() {
        getDots("018");
    }
    function isPhp() {
        getDots("019");
    }
    function isXml() {
        getDots("020");
    }
    function isFigma() {
        getDots("021");
    }

    function isPhotoshop() {
        getDots("022");
    }
    function isUbuntu() {
        getDots("023");
    }
    function isWindows() {
        getDots("024");
    }
    function isApple() {
        getDots("025");
    }

    const slides = {
        'javascript': issJavascript,
        'jquery': isJquery,
        'vue': isVue,
        'css': isCss,
        'sass': isSass,
        'less': isLess,
        'flex-box': isFlexBox,
        'grid': isGrid,
        'html': isHtml,
        'gulp': isGulp,
        'grunt': isGrunt,
        'webpack': isWebpack,
        'compass': isCompas,
        'magento': isMagento,
        'presta': isPrestashop,
        'msql': isMsql,
        'apatche2': apatche2,
        'nginx': isNginx,
        'git': isGit,
        'php': isPhp,
        'xml': isXml,
        'figma': isFigma,
        'photoshop': isPhotoshop,
        'ubuntu': isUbuntu,
        'windows': isWindows,
        'apple': isApple,
    };
    return slides[type]();
}


function moveToSlider() {
    $(data.skilsBox).find('.skils-box__item').on("click", function () {
        const type = $(this).attr('class').split(' ')[1];
        console.log(type);
        getSlide(type);
    });
}


moveToSlider();






