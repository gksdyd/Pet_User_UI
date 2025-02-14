(function ($) {
    "use strict";

    /* ==============================================
     ANIMATION -->
     =============================================== */

    new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    }).init();

    /* ==============================================
     LIGHTBOX -->
     =============================================== */

    jQuery('a[data-gal]').each(function () {
        jQuery(this).attr('rel', jQuery(this).data('gal'));
    });
    jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
        animationSpeed: 'slow',
        theme: 'light_square',
        slideshow: true,
        overlay_gallery: true,
        social_tools: false,
        deeplinking: false
    });

    /* ==============================================
     SCROLL -->
     =============================================== */

    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* ==============================================
     SCROLLSPY -->
     =============================================== */

    $('body').scrollspy({
        target: '.docs-sidebar'
    });

    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh');
    });

    /* ==============================================
     VIDEO FIX -->
     =============================================== */

    $(document).ready(function () {
        // Target your .container, .wrapper, .post, etc.
        $(".media").fitVids();
    });

    /* ==============================================
     VIDEO FIX -->
     =============================================== */

    $('.docs-sidebar > nav >li > a').click(function () {
        $('.docs-sidebar > nav > li').removeClass('active');
        $(this).parent().addClass('active');
    });

    var selectors = {
        body: 'body',
        menuToggle: '.js-mobile-nav-toggle'
    };
    $(selectors.menuToggle).on("click", function () {
        body: 'body',
                $(selectors.mobilenav).toggleClass("active");
        $(selectors.body).toggleClass("menuOn");
        $(selectors.menuToggle).toggleClass('mobile-nav--open mobile-nav--close');
    });

    $(selectors.closemenu).on("click", function () {
        body: 'body',
                $(selectors.mobilenav).toggleClass("active");
        $(selectors.body).toggleClass("menuOn");
        $(selectors.menuToggle).toggleClass('mobile-nav--open mobile-nav--close');
    });

})(jQuery);
