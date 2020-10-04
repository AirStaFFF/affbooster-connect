$(document).ready(function () {
    var navLinks = $('.nav-link');
    var scrollCheckNav;
    $(navLinks[0]).click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $("#whatIsIt").offset().top + 10
        }, 1000);
    });
    $(navLinks[1]).click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $("#chips").offset().top + 10
        }, 1000);
    });
    $(navLinks[2]).click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $("#review").offset().top + 10
        }, 1000);
    });
    $(".navbar-brand").click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $("#main").offset().top
        }, 1000);
    });
    var hght = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    var width = $(window).width()
    var a = $(window).scrollTop();
    var b = hght - $(window).scrollTop()

    function CheckWidth(scrolled, scr) {
        var width = $(window).width()
        if ($(window).width() > 768) {
            $('.s4 .content h2').css({
                'font-size': '24px'
            })
            $('.s4').css({
                'height': width * .4 + 'px'
            })
        } else {
            $('.s4').css({
                'height': '400px'
            })
        }
        if ($(window).width() >= 1600) {
            if (scr > 600 && scr < 2260) {
                $('.s4 .content h2').css({
                    'font-size': '46px'
                })
                $('.buble1').css({
                    'transform': `scale(${scrolled*.00024},${scrolled*.00024}) translate(0, ${(0-(scr*.06))+'px'})`
                })
                $('.buble2').css({
                    'transform': `scale(${scrolled*.00021},${scrolled*.00021}) translate(0, ${(0+(scr*.06))+'px'})`
                });
                $('.ship').css({
                    'transform': `scale(${scrolled*.00031},${scrolled*.00031}) translateX(-20%)`
                });
                $('.man').css({
                    'transform': `scale(${scrolled*.00024},${scrolled*.00024}) translateX(-30%)`
                });
            }
        } else if ($(window).width() >= 1300) {
            $('.s4 .content h2').css({
                'font-size': '36px'
            })
            if (scr > 600 && scr < 3000) {
                $('.buble1').css({
                    'transform': `scale(${scrolled*.00019},${scrolled*.00019}) translate( -20%, ${(0-(scr*.08))+'px'})`
                })
                $('.buble2').css({
                    'transform': `scale(${scrolled*.00018},${scrolled*.00018}) translate(30%, ${(0+(scr*.07))+'px'})`
                });
                $('.ship').css({
                    'transform': `scale(${scrolled*.00020},${scrolled*.00020}) translateX(10%)`
                });
                $('.man').css({
                    'transform': `scale(${scrolled*.00019},${scrolled*.00019}) translateX(-70%)`
                });
            }
        } else if ($(window).width() >= 1200) {
            $('.s4 .content h2').removeAttr('style')
            if (scr > 600 && scr < 3000) {
                $('.buble1').css({
                    'transform': `scale(${scrolled*.00017},${scrolled*.00017}) translate( -20%, ${(0-(scr*.08))+'px'})`
                })
                $('.buble2').css({
                    'transform': `scale(${scrolled*.00016},${scrolled*.00016}) translate(30%, ${(0+(scr*.1))+'px'})`
                });
                $('.ship').css({
                    'transform': `scale(${scrolled*.00018},${scrolled*.00018}) translateX(10%)`
                });
                $('.man').css({
                    'transform': `scale(${scrolled*.00016},${scrolled*.00016}) translateX(-70%)`
                });
            }
        } else if ($(window).width() >= 1000) {
            scr = scr / 1.4
            if (scr > 600 && scr < 3000) {
                $('.buble1').css({
                    'transform': `scale(${scrolled*.00015},${scrolled*.00015}) translate( -20%, ${(0-(scr*.08))+'px'})`
                })
                $('.buble2').css({
                    'transform': `scale(${scrolled*.00014},${scrolled*.00014}) translate(30%, ${(0+(scr*.1))+'px'})`
                });
                $('.ship').css({
                    'transform': `scale(${scrolled*.00018},${scrolled*.00018}) translateX(10%)`
                });
                $('.man').css({
                    'transform': `scale(${scrolled*.00015},${scrolled*.00015}) translateX(-70%)`
                });
            }
        } else if ($(window).width() >= 850) {
            scr = scr / 1.4

            if (scr > 600 && scr < 3000) {
                $('.buble1').css({
                    'transform': `scale(${scrolled*.00013},${scrolled*.00013}) translate( -60%, ${(0-(scr*.08))+'px'})`
                })
                $('.buble2').css({
                    'transform': `scale(${scrolled*.00011},${scrolled*.00011}) translate(40%, ${(0+(scr*.1))+'px'})`
                });
                $('.ship').css({
                    'transform': `scale(${scrolled*.00013},${scrolled*.00013}) translateX(30%)`
                });
                $('.man').css({
                    'transform': `scale(${scrolled*.00012},${scrolled*.00012}) translateX(-100%)`
                });
            }
        } else if ($(window).width() >= 769) {
            scr = scr / 1

            if (scr > 600 && scr < 3000) {
                $('.buble1').css({
                    'transform': `scale(${scrolled*.0001},${scrolled*.00010}) translate( -90%, ${(0-(scr*.1))+'px'})`
                })
                $('.buble2').css({
                    'transform': `scale(${scrolled*.0001},${scrolled*.0001}) translate(40%, ${(0+(scr*.12))+'px'})`
                });
                $('.ship').css({
                    'transform': `scale(${scrolled*.0001},${scrolled*.0001}) translateX(30%)`
                });
                $('.man').css({
                    'transform': `scale(${scrolled*.0001},${scrolled*.0001}) translateX(-100%)`
                });

            }
        }
    }

    CheckWidth(a, b)
    parallaxScrollFooter(a, b)
    window.addEventListener('resize', function () {
        hght = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

        var scrolled = $(window).scrollTop();
        var scr = hght - $(window).scrollTop()
        CheckWidth(scrolled, scr)

    });
    if ($('.navbar').offset().top > 30) {
        $('nav .btn').addClass('navbar-button')
    } else {
        $('nav .btn').removeClass('navbar-button')
    };
    $('body').scrollspy({
        target: '#navbarTogglerDemo02'
    })
    $(window).scroll(function () {
        if ($(window).scrollTop() > 30) {
            $('nav .btn').addClass('navbar-button')
        } else {
            $('nav .btn').removeClass('navbar-button')
        };
        if ($(window).width() > 576) {
            parallaxScroll()
            parallaxScrollFooter()
        }

    });


    function parallaxScroll() {
        var scrolled = $(window).scrollTop(),
            pos = scrolled * .12;
        if (pos < 250) {
            $('body .s1 .rover').css('transform', `translateY(${(0+(pos))+'px'})`);
            $('body .s1 .module').css('transform', `translateY(${(0+(pos))+'px'})`);
        }
    }

    function parallaxScrollFooter() {
        var scrolled = $(window).scrollTop();
        var scr = hght - $(window).scrollTop()
        CheckWidth(scrolled, scr)
    }
    
});
