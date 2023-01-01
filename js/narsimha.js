$(document).ready(function () {
    $(".dropdown-toggle").click(function () {
        $(".dropdown-menu").slideToggle(1000)

    });

    $('.dropdown-menu li').click(function () {
        $(' .dropdown-menu li').removeClass('active');
        $(this).addClass('active');
        var data = $(this).attr('nsr');
        $(' .tabs-data').removeClass('active');
        $('#' + data).addClass('active');
    }),
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            autowidth: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: false,
            nav: false,
            startPosition: 1,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 1
                }
            }
        })
})

