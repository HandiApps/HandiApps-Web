$( document ).ready(function() {
  var distance = $('#nav').offset().top, $window = $(window);
  
  $window.scroll(function() {
      if ( $window.scrollTop() >= distance ) {
        $('.navtitle').fadeIn();
      }
      else {
        $('.navtitle').fadeOut(200);
      }
  });

  $('#nav')
  .sticky({
    context: '#main'
  });
});
