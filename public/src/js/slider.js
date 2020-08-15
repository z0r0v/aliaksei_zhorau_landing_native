import * as $ from '../../node_modules/jquery';
import '../../node_modules/slick-carousel';
const data = {
    sliderSkill: '.box__slick-slider .slick-slider',
    sliderCert: '.box__certificates-slider .slick-slider',
    sliderProject: '.box__project-slider .slick-slider',
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
        function isVue() {
            methods.getDots("01");
        }
        function isReact() {
            methods.getDots("02");
        }
        function isJquery() {
            methods.getDots("03");
        }
        function isCss() {
            methods.getDots("04");
        }

        function isSass() {
            methods.getDots("05");
        }

        function isLess() {
            methods.getDots("06");
        }

        function isFlexBox() {
            methods.getDots("07");
        }

        function isGrid() {
            methods.getDots("08");
        }

        function isHtml() {
            methods.getDots("09");
        }

        function isGulp() {
            methods.getDots("010");
        }

        function isGrunt() {
            methods.getDots("011");
        }

        function isWebpack() {
            methods.getDots("012");
        }

        function isCompas() {
            methods.getDots("013");
        }

        function isMagento() {
            methods.getDots("014");
        }

        function isPrestashop() {
            methods.getDots("015");
        }

        function isMsql() {
            methods.getDots("016");
        }

        function apatche2() {
            methods.getDots("017");
        }

        function isNginx() {
            methods.getDots("018");
        }

        function isGit() {
            methods.getDots("019");
        }

        function isPhp() {
            methods.getDots("020");
        }

        function isXml() {
            methods.getDots("021");
        }

        function isFigma() {
            methods.getDots("022");
        }

        function isPhotoshop() {
            methods.getDots("023");
        }

        function isUbuntu() {
            methods.getDots("024");
        }

        function isWindows() {
            methods.getDots("025");
        }

        function isApple() {
            methods.getDots("026");
        }
        const slides = {
            'javascript': issJavascript,
            'vue': isVue,
            'react': isReact,
            'jquery': isJquery,
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
    sliderInit:(slider, config) => {
        $(slider).slick(config);
        methods.moveToSlider();
    }
};

const autoplaySpeed = 3000;
const autoplay = true;
// const autoplay = false;


const skilsConfig = {
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    arrows: false,
    pauseOnFocus: true,
    speed: 500,
    swipeToSlide: true,
    dots: true
};

const certConfig = skilsConfig;

const projectСonfig = {
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
};


methods.sliderInit(data.sliderSkill, skilsConfig);
methods.sliderInit(data.sliderCert, certConfig);
methods.sliderInit(data.sliderProject, projectСonfig);

// i can use this methods
// slickCurrentSlide
// slickGoTo



