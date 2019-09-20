$(document).ready(function () {
  $('.menu-toggle').on('click', function(){
    $(this).toggleClass('open');
    $('.main-nav').toggleClass('open');

  });
});
