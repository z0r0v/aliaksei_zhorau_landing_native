import * as $ from '../../node_modules/jquery';

const data = {
    boxMenu: '.mobile-menu',
    burger: '.mobile-menu__burger',
    span: '.mobile-menu span',
    ul: '.header-box__nav-box--ul',
};

const methods = {
    toggleClassElem: function (elem, elemTo, addClass) {
        elem.on("click", function () {
            elemTo.toggleClass(addClass);
        });
    }
};

methods.toggleClassElem($(data.burger), $(data.ul), "show-menu");
methods.toggleClassElem($(data.span), $(data.ul), "show-menu");


