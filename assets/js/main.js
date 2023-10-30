(function ($) {
  $(document).ready(function () {
    // START HEADER
    $('.topmenu > ul > li > a').each(function () {
      if ($(this).next('ul').length > 0) {
        $(this).after('<div class="arr-nav"></div>');
      }
    });

    $('.topmenu > ul > li').mouseenter(function () {
      $(this).children('ul').fadeIn();
    });
    $('.topmenu > ul > li').mouseleave(function () {
      $(this).children('ul').fadeOut();
    });

    // END HEADER
  });
})(jQuery);
