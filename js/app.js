//@codekit-prepend "../bower_components/jquery/dist/jquery.js"
//@codekit-prepend "../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js"
//@codekit-prepend "../bower_components/picturefill/dist/picturefill.js"
//@codekit-prepend "../bower_components/jquery-placeholder/jquery.placeholder.js
//@codekit-prepend "../bower_components/slick-carousel/slick/slick.js"
//@codekit-prepend "../bower_components/magnific-popup/dist/jquery.magnific-popup.js"
//@codekit-prepend "../js/non_bower/jquery.validate.min.js"
//@codekit-prepend "../bower_components/unslider/src/unslider.js"


/*
 ******************** Function: Init Bootstrap Tooltips & Popovers
 */
$('.popover-init [data-toggle="popover"]').popover();
$('.tooltip-init [data-toggle="tooltip"]').tooltip();


/*
 ******************** Function: Add placeholder input text support for older IE
 */
$('input, textarea').placeholder();


/*
 ******************** Function: Add cpoyright date to footer
 */
$('.copyrightYear').html(new Date().getFullYear());


/*
 ******************** Function: Slider Init & Settings
 */
$('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
        }
    }]
});


/*
 ******************** Function: Magnific Popup Init & Settings
 */

$('.gallery').each(function() {
    if (!window.isCMS) { //disables within CMS
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
            enabled: true
            }
        });
    }
});

//hides thumbs if there are more than 4
$(function() {
        $(".gallery").each(function() {
            $(this).children(":gt(3)").hide();
        });
});


$(".gallery a").addClass("pull-left");



/*
 ******************** Function: Bootstrap Contact Form
 */
var validator = $("#contactform").validate({
    errorClass: 'has-error',
    validClass: 'has-success',
    errorElement: 'div',
    highlight: function(element, errorClass, validClass) {
        $(element).closest('.form-control').addClass(errorClass).removeClass(validClass);
        //$(element).closest('.form-group').addClass(errorClass).removeClass(validClass);
    },
    unhighlight: function(element, errorClass, validClass) {
        //$(element).parents(".has-error").removeClass(errorClass).addClass(validClass);
        $(element).parents(".has-error").removeClass(errorClass);
    },
    rules: {
        contactname: {
            required: true,
            minlength: 2
        },
        email: {
            required: true,
            email: true
        },
        weburl: {
            required: true,
            url: true
        },
        // phone: {
        //     required: false,
        //     phoneUS: true
        // },
        subject: {
            required: true
        },
        message: {
            required: true,
            minlength: 10
        }
    },
    messages: {
        contactname: {
            required: '<span class="help-block">Required: Please enter your name.</span>',
            minlength: jQuery.format('<span class="help-block">Your name needs to be at least {0} characters.</span>')
        },
        email: {
            required: '<span class="help-block">Required: Please enter a valid email address.</span>',
            minlength: '<span class="help-block">Please enter a valid email address.</span>'
        },
        weburl: {
            required: '<span class="help-block">You need to enter the address to your website.</span>',
            url: jQuery.format('<span class="help-block">You need to enter a valid URL.</span>')
        },
        phone: {
            required: '<span class="help-block">Please enter your phone number.</span>',
            phoneUS: jQuery.format('<span class="help-block">Please enter a valid phone number.</span>')
        },
        subject: {
            required: '<span class="help-block">You need to enter a subject.</span>'
        },
        message: {
            required: '<span class="help-block">Required: Please enter a message.</span>',
            minlength: jQuery.format('<span class="help-block">Enter at least {0} characters.</span>')
        }
    }
});

if ($(".alert-success").length > 0) {
    $('.test').hide();
}



/*
 ******************** Function: Animated Scroll For Contact Form
 */
$(function() {
    var target, scroll;

    $("a[href*=#]:not([href=#])").on("click", function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            target = $(this.hash);
            target = target.length ? target : $("[id=" + this.hash.slice(1) + "]");

            if (target.length) {
                if (typeof document.body.style.transitionProperty === 'string') {
                    e.preventDefault();

                    var avail = $(document).height() - $(window).height();

                    scroll = target.offset().top + (-80);

                    if (scroll > avail) {
                        scroll = avail;
                    }

                    $("html").css({
                        "margin-top": ($(window).scrollTop() - scroll) + "px",
                        "transition": "1s ease-in-out"
                    }).data("transitioning", true);
                } else {
                    $("html, body").animate({
                        scrollTop: scroll
                    }, 50);
                    return;
                }
            }
        }
    });

    $("html").on("transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", function(e) {
        if (e.target == e.currentTarget && $(this).data("transitioning") === true) {
            $(this).removeAttr("style").data("transitioning", false);
            $("html, body").scrollTop(scroll);
            return;
        }
    });
});


/*
 ******************** Function: Marquee Slider Settings
 */
$('.marquee').unslider({
    speed: 600,                     //  The speed to animate each slide (in milliseconds)
    delay: 5000,                    //  The delay between slide animations (in milliseconds)
    complete: function() {},        //  A function that gets called after every slide animation
    keys: true,                     //  Enable keyboard (left, right) arrow shortcuts
    dots: false,                    //  Display dot navigation
    fluid: true                     //  Support responsive design. May break non-responsive designs
});
