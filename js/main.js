$(".inquire-button").click(function () {
  $('html,body').animate({
    scrollTop: $(".form-section").offset().top
  },
    'slow');
});
$('form').on('submit', function (event) {
  var $form = $(this);
  event.preventDefault();
  alert('Success')
  $('html,body').animate({
    scrollTop: $(".form-section").offset().top
  },
    'slow');
    $('form')[0].reset();
});
