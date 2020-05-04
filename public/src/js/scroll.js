import * as $ from '../../node_modules/jquery';

const data = {
    headerBox: '.header-box',
    scrollTopValue: 100,
};
const methods = {
    slowScrollAnchors:() => {
        $(document).ready(function () {
            // Add smooth scrolling to all links
            $("a").on('click', function (event) {
                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {
                    // Prevent default anchor click behavior
                    event.preventDefault();
                    // Store hash
                    var hash = this.hash;
                    // Using jQuery's animate() method to add smooth page scroll
                    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function () {
                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                    });
                } // End if
            });
        });
    },
    getScroll:()=> {
        $(window).on('scroll', () => {
            if (window.matchMedia("(max-width: 978px)").matches) {
                data.scrollTopValue = 159;

            } else if (window.matchMedia("(max-width: 1298px)").matches) {
                data.scrollTopValue = 165;
            } else {
                data.scrollTopValue = 95;
            }
            if (document.documentElement.scrollTop >= data.scrollTopValue) {
                $(data.headerBox).addClass('maxDown');
                $(data.headerBox).removeClass('maxUp');
            } else {
                $(data.headerBox).addClass('maxUp');
                $(data.headerBox).removeClass('maxDown');
            }
        });
    },
    scrollInit:()=> {
        methods.slowScrollAnchors();

        // тут работает не коректно нужно чтото придумать
        // methods.getScroll();
    }
};

methods.scrollInit();


