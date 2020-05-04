import * as $ from '../../node_modules/jquery';
import '../../node_modules/slick-carousel';
const data = {
    slider: '.slick-slider',
    skilsBox: '.skils-box',
    slickDots: '.slick-dots',
    item: '.skils-box__item',
    slideControl:'#slick-slide-control',
};
const methods = {
    getDots: (number) => {
        $(data.slickDots).find(data.slideControl + number).parent().trigger("click");
    },
    getSlide: (type) => {
        function issJavascript() {
            methods.getDots("00");
        }

        function isJquery() {
            methods.getDots("01");
        }

        function isVue() {
            methods.getDots("02");
        }

        function isCss() {
            methods.getDots("03");
        }

        function isSass() {
            methods.getDots("04");
        }

        function isLess() {
            methods.getDots("05");
        }

        function isFlexBox() {
            methods.getDots("06");
        }

        function isGrid() {
            methods.getDots("07");
        }

        function isHtml() {
            methods.getDots("08");
        }

        function isGulp() {
            methods.getDots("09");
        }

        function isGrunt() {
            methods.getDots("010");
        }

        function isWebpack() {
            methods.getDots("011");
        }

        function isCompas() {
            methods.getDots("012");
        }

        function isMagento() {
            methods.getDots("013");
        }

        function isPrestashop() {
            methods.getDots("014");
        }

        function isMsql() {
            methods.getDots("015");
        }

        function apatche2() {
            methods.getDots("016");
        }

        function isNginx() {
            methods.getDots("017");
        }

        function isGit() {
            methods.getDots("018");
        }

        function isPhp() {
            methods.getDots("019");
        }

        function isXml() {
            methods.getDots("020");
        }

        function isFigma() {
            methods.getDots("021");
        }

        function isPhotoshop() {
            methods.getDots("022");
        }

        function isUbuntu() {
            methods.getDots("023");
        }

        function isWindows() {
            methods.getDots("024");
        }

        function isApple() {
            methods.getDots("025");
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
    },
    moveToSlider: () => {
        $(data.skilsBox).find(data.item).on("click", function () {
            const type = $(this).attr('class').split(' ')[1];
            methods.getSlide(type);
        });
    },
    sliderInit:() => {
        $(data.slider).slick(
            {
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: false,
                pauseOnFocus: true,
                speed: 500,
                swipeToSlide: true,
                dots: true
            }
        );
        methods.moveToSlider();
    }
};

methods.sliderInit();


// i can use this methods
// slickCurrentSlide
// slickGoTo



