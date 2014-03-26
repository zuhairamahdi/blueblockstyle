$(document).ready(function() {
    // Hovering a clicking on grid items
    $('.hover').hover(
            function() {
                $('.hover').removeClass('float flip');
                $(this).addClass("float");
            },
            function() {
                if (!$(this).hasClass('flip')) {
                    $(this).removeClass("float");
                }
            }
    );

    $('.hover').click(function() {
        if ($(this).hasClass('flip')) {
            $(this).removeClass('float flip');
        } else {
            $(this).addClass('flip');
        };
    });


    // People Filtering
    $('.resource-filter li.active').click(function() {
        if ($('.resource-filter ul').hasClass('open')) {
            $('.resource-filter ul').removeClass('open');
        } else {
            $('.resource-filter ul').addClass('open');
        };
    });
    $(function() {
        $('#people').mixitup({
            effects: ['fade', 'scale'],
            transitionSpeed: 600,
            onMixEnd: function() {
                if ($('.resource-filter ul').hasClass('open')) {
                    $('.resource-filter ul').removeClass('open');
                } else {
                    $('.resource-filter ul').addClass('open');
                };
            }
        });
    });

    $('.resource-filter li.active.all').click(function() {
        $('.resource-filter ul').toggleClass('open');
    });

    
       // Contact Form Validation
    $("#contact").validate();
    $('input, textarea').placeholder();


    // Expertise/Approach Capabilities Hover
    $('.expertise-item').hover(
            function() {
                $(this).children('.expertise-dropdown').addClass('open', 500);
                $(this).children('.arrow').addClass('open', 500);
            },
            function() {

                $(this).children('.expertise-dropdown').removeClass('open', 400);
                $(this).children('.arrow').removeClass('open', 400);
            }
    );

    $('.expertise-item').click(function() {
        if ($(this).children('.expertise-dropdown').hasClass('open')) {
            $(this).children('.expertise-dropdown').removeClass('open', 500);
            $(this).children('.arrow').removeClass('open', 500);
        } else {
            $(this).children('.expertise-dropdown').addClass('open', 400);
            $(this).children('.arrow').addClass('open', 400);
        };
    });





    // Resizable Header
    headerHeight();
    $(window).resize(function() {
        headerHeight();
        if (document.getElementById("showreel-container")) {
            videoHeight();
        };
    });




    // Scroll to Top
    $('#scroll-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });



    // Mobile Navigation Flyout
    mobileMenuVisible = false;

    $('.mobile-nav').click(function() {
        var position = $(this).data('position');
        if (!mobileMenuVisible) {
            mobileMenuVisible = true;
            $('.wrapper').animate({
                left: '-70%'
            }, 300, 'swing');
            $('.mobile-navigation').addClass(position);
            setTimeout(function() {
                $('.icon').addClass('close');
            }, 300);
        } else {
            mobileMenuVisible = false;
            $('.wrapper').animate({
                left: '0'
            }, 300, 'swing');
            setTimeout(function() {
                $('.mobile-navigation').removeClass(position);
                $('.icon').removeClass('close');
            }, 300);
        }
    });


});


// Header Resizing Function
function headerHeight() {
    var height = ($(window).height() * 0.70);
    var width = ($(window).width());
    $('.header-resizable').css('height', (height));
    $('.header-resizable').fadeIn('slow');

    var text = $('.header-resizable .header-text').height();
    var actualHeight = $('.header-resizable').height()
    var textHeight = (actualHeight / 2) - (text / 2);
    $('.header-resizable .col-2-2').css('padding-top', (textHeight));

    if (width >= 1025) {
        if (!document.getElementById("video_background")) {

            $('.header-video').append('<div id="video_background"><video id="video_background" height="100" width="100" preload="auto" autoplay="" loop="loop" muted="muted" poster="images/header-images/homepage.jpg"><source src="videos/home.mp4" type="video/mp4"><source src="videos/home.WebM" type="video/webm"></video></div>');
            }
    } else {
       $('#video_background').remove();
    }
}


function videoHeight() {
    var height = ($(window).height() - 100);
    $('#showreel-container').css('height', height);
}
