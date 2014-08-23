var buttons = $('.js-change-panel');
var panels = $('.js-panel');

buttons.each(function() {
  $(this).on('click', function(e) {
    e.preventDefault();
    buttons.removeClass('is-active');
    $(this).addClass('is-active');
    panels.removeClass('is-active');
    panels.eq($.inArray(this, buttons)).addClass('is-active');
  })
});
