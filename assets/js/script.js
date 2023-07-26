$(document).ready(function () {
    header();
    sliders();
    counterAnimation();
});

function header() {
    const toggle = $("#menu-toggle");
    const cross = $("#crossNav");
    const navbar = $(".mobile-nav");
    var nav = false;

    cross.click(function () {
        navbar.fadeOut("fast");
        nav = false;
    });

    toggle.click(function () {
        if (nav == false) {
            $(".mobile-nav").fadeIn("fast");
            nav = true;
        } else {
            $(".mobile-nav").fadeOut("fast");
            nav = false;
        }
    });
}

function sliders() {
    $(".homeBannerSlider").slick({
        dots: true,
    });
}

function counterAnimation() {
    $(window).on("scroll", function () {
        var section = $(".numberSection");
        var windowHeight = $(window).height();
        var windowScrollTop = $(window).scrollTop();
        var sectionOffset = section.offset().top;

        if (windowScrollTop + windowHeight > sectionOffset) {
            //main Animation Code:
            $(".count").each(function () {
                $(this)
                    .prop("Counter", 0)
                    .animate(
                        {
                            Counter: $(this).text(),
                        },
                        {
                            duration: 2000,
                            easing: "swing",
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            },
                        }
                    );
            });

            // Unbind the scroll event once the function is executed
            $(window).off("scroll");
        }
    });
}
