import * as $ from '../../node_modules/jquery';

const data = {
    boxMenu: '.mobile-menu',
    burger: '.mobile-menu__burger',
    span: '.mobile-menu span',
    ul: '.header-box__nav-box--ul',
    a: '.header-box__nav-box--ul__li a',
    minClientWidth: 970,
    button: ".box__about-me--text__toggle-mySkills",
    skills: ".box__about-me--text__mySkills",
};

const methods = {
    toggleClassElem: function (elem, elemTo, elemLink) {
        elem.on("click", function () {
            elemTo.slideToggle("slow");
        });

        if (document.body.clientWidth < data.minClientWidth) {
            elemLink.on("click", function () {
                elemTo.slideUp("slow");
            });
        }
    },

    toggleButton: function (elem, elemTo) {
        elem.on("click", function () {
            elemTo.slideToggle("slow");
            elem.toggleClass("active");
        });
    },

};

const {burger, ul, a, span, button, skills} = data;
methods.toggleClassElem($(burger), $(ul), $(a));
methods.toggleClassElem($(span), $(ul), $(a));
methods.toggleButton($(button), $(skills));


